# Certified Slugger Project

This project integrates a Flask backend with a dynamic front-end powered by Tailwind CSS and the SQL.js library to query an SQLite database. The project features a simple web interface that dynamically loads data from the database and displays it using HTML and Tailwind CSS.

## Project Structure

Here is an overview of the project structure:

### Explanation of key files:

- **`app.py`**: The main Flask application file. It sets up routes and serves the HTML templates while querying the database.
- **`static/css/`**: Contains the main CSS files for the project.
  - **`styles.css`**: Custom CSS file.
  - **`tailwind.css`**: The output of the Tailwind CSS build process.
- **`static/js/`**: Contains JavaScript files for interacting with the backend and frontend logic.
  - **`script.js`**: Handles dynamic population of data from the Flask API and updates the HTML page.
- **`static/libs/`**: Contains the `sql-wasm.js` file, which is used for interacting with SQLite directly on the client side using WebAssembly.
- **`templates/`**: Contains HTML templates.
  - **`index.html`**, **`query1.html`**, **`query2.html`**, **`query3.html`**: Each file contains a different query page, where the data is displayed dynamically.
  - **`navbar.html`**: A reusable navigation bar that is included across all pages.

## Installation Instructions

Follow the steps below to set up and run the project locally.

### Prerequisites

- **Python 3.12+**: Required for the Flask backend.
- **Node.js 16.0+**: Required for building the frontend with Tailwind CSS.

### 1. Clone the Repository

If you haven't cloned the repository yet, run:

```bash
git clone <your-repository-url>
cd your-repository-folder
```

### 2. Set up Python environment

Create a virtual environment (recommended) and install the required dependencies:

```
python -m venv venv
source venv/bin/activate    # On macOS/Linux
venv\Scripts\activate       # On Windows
pip install -r requirements.txt
```

### 3. Install Frontend Dependencies

Install the required Node.js packages (including Tailwind CSS and concurrently for running scripts):

```
npm install
```

### 4. Running the Application

You can run both the Flask app and the Tailwind watch processes simultaneously using the following npm script:

```
npm run start
```

This will:

Start the Flask application (python app.py).

Begin watching your Tailwind CSS file for changes (npx tailwindcss --watch).

You can now open your browser and go to http://127.0.0.1:5000/ to view the application.

You can also use live server for viewing your changes live

## Workflow info

All of our queries will be written inside the app.py class.

### SQLite Database (Backend):

The Flask server interacts with the SQLite database for storage and server-side processing. The data is stored in an SQLite database file (e.g., db.db) on the server.

### SQL.js (Frontend):

When the user accesses the application in the browser, the SQLite database file is made available to the frontend using SQL.js. This file is loaded into the browser via JavaScript and WebAssembly. (in the static/libs/ dir)

## IMPORTANT!!!!

### Reccommended VSCODE extensions:

- ### SQLite

  this one allows you to view the contents of the db.db tables and generate test queries on your results

- ### SQLite Viewer
  you honestly dont really need this one but it also shows you the same as the first one.
- ### Live Server / Fiver server
  duhhh

## example

- on the query 1 page i have it selecting the entire master table for a simple query example.
