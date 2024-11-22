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
    # Replace the SQL query below with your specific query
    return render_template('query1.html')

@app.route('/query2')
def query2():
    # Replace the SQL query below with your specific query
    return render_template('query2.html')

@app.route('/query3')
def query3():
    # Replace the SQL query below with your specific query
    return render_template('query3.html')

@app.route('/query4')
def query4():
    # Replace the SQL query below with your specific query
    return render_template('query4.html')

# API route to get data from the database
@app.route('/api/data')
def get_data():
    data = query_database('SELECT * FROM Master')  # Replace 'your_table' with your actual table name
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
