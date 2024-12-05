from flask import Flask, render_template, jsonify
import sqlite3

app = Flask(__name__, static_folder="static")

# Function to query the SQLite database
def query_database(query, args=()):
    with sqlite3.connect('data/db.db') as conn:
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute(query, args)
        rows = cur.fetchall()
        return [dict(row) for row in rows]
    # Route to serve the main page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/query1')
def query1():
    return render_template('query1.html')

@app.route('/query2')
def query2():
    return render_template('query2.html')

@app.route('/query3')
def query3():
    return render_template('query3.html')
@app.route('/query4')
def query4():
    return render_template('query4.html')

# API route to get unique batting data for specific years and team, including player names
@app.route('/api/query1')
def get_batting_data():
    queries = {
        '2000-2001': '''SELECT DISTINCT m.nameFirst, m.nameLast, b.AB, b.H, b.HR, b.RBI, b.yearID, b.teamID
                        FROM Batting b
                        INNER JOIN Master m ON b.playerID = m.playerID
                        WHERE b.yearID BETWEEN 1990 AND 2000 
                        ORDER BY b.H DESC
                        LIMIT 25''',
        '2001-2002': '''SELECT DISTINCT m.nameFirst, m.nameLast, b.AB, b.H, b.HR, b.RBI, b.yearID, b.teamID
                        FROM Batting b
                        INNER JOIN Master m ON b.playerID = m.playerID
                        WHERE b.yearID BETWEEN 2000 AND 2010 
                        ORDER BY b.H DESC
                        LIMIT 25''',
        '2002-2003': '''SELECT DISTINCT m.nameFirst, m.nameLast, b.AB, b.H, b.HR, b.RBI, b.yearID, b.teamID
                        FROM Batting b
                        INNER JOIN Master m ON b.playerID = m.playerID
                        WHERE b.yearID BETWEEN 2010 AND 2015
                        ORDER BY b.H DESC
                        LIMIT 25''',
    }
    data = {key: query_database(query) for key, query in queries.items()}
    return jsonify(data)

# API route to get unique fielding data for specific years and team, including player names
@app.route('/api/query2')
def get_fielding_data():
    queries = {
        '2000-2001': '''SELECT DISTINCT m.nameFirst, m.nameLast, f.POS, f.G, f.InnOuts, f.yearID, f.teamID
                        FROM Fielding f
                        INNER JOIN Master m ON f.playerID = m.playerID
                        WHERE f.yearID BETWEEN 1990 AND 2000  
                        ORDER BY f.InnOuts DESC
                        LIMIT 25''',
        '2001-2002': '''SELECT DISTINCT m.nameFirst, m.nameLast, f.POS, f.G, f.InnOuts, f.yearID, f.teamID
                        FROM Fielding f
                        INNER JOIN Master m ON f.playerID = m.playerID
                        WHERE f.yearID BETWEEN 2000 AND 2010
                        ORDER BY f.InnOuts DESC
                        LIMIT 25''',
        '2002-2003': '''SELECT DISTINCT m.nameFirst, m.nameLast, f.POS, f.G, f.InnOuts, f.yearID, f.teamID
                        FROM Fielding f
                        INNER JOIN Master m ON f.playerID = m.playerID
                        WHERE f.yearID BETWEEN 2010 AND 2015
                        ORDER BY f.InnOuts DESC
                        LIMIT 25''',
    }
    data = {key: query_database(query) for key, query in queries.items()}
    return jsonify(data)

# API route to get unique pitching data for specific years and team, including player names
@app.route('/api/query3')
def get_pitching_data():
    queries = {
        '2000-2001': '''SELECT DISTINCT m.nameFirst, m.nameLast, p.L, p.W, p.ER, p.ERA, p.yearID, p.teamID
                        FROM Pitching p
                        INNER JOIN Master m ON p.playerID = m.playerID
                        WHERE p.yearID BETWEEN 1990 AND 2000 
                        ORDER BY p.W DESC
                        LIMIT 25 ''',
        '2001-2002': '''SELECT DISTINCT m.nameFirst, m.nameLast, p.L, p.W, p.ER, p.ERA, p.yearID, p.teamID
                        FROM Pitching p
                        INNER JOIN Master m ON p.playerID = m.playerID
                        WHERE p.yearID BETWEEN 2000 AND 2010 
                        ORDER BY p.W DESC
                        LIMIT 25''',
        '2002-2003': '''SELECT DISTINCT m.nameFirst, m.nameLast, p.L, p.W, p.ER, p.ERA, p.yearID, p.teamID
                        FROM Pitching p
                        INNER JOIN Master m ON p.playerID = m.playerID
                        WHERE p.yearID BETWEEN 2010 AND 2015 
                        ORDER BY p.W DESC
                        LIMIT 25 ''',
    }
    data = {key: query_database(query) for key, query in queries.items()}
    return jsonify(data)

@app.route('/api/query4')
def get_salary_data():
    queries = {
        '1990s': 'SELECT * FROM Salaries_1990s',
        '2000s': 'SELECT * FROM Salaries_2000s',
        '2010s': 'SELECT * FROM Salaries_2010s',
        'top_salaries': 'SELECT * FROM Top_Salaries '
    }
    data = {key: query_database(query) for key, query in queries.items()}
    return jsonify(data)




if __name__ == '__main__':
    app.run(debug=True)