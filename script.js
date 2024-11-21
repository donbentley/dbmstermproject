// Initialize SQL.js and Load the Database
async function runQuery(query) {
	// Initialize sql.js
	const SQL = await initSqlJs({ locateFile: (file) => `libs/${file}` });

	// Fetch and load the database file
	const response = await fetch("data/database.db");
	const buffer = await response.arrayBuffer();
	const db = new SQL.Database(new Uint8Array(buffer));

	// Execute the query
	const results = db.exec(query);

	// Display results
	displayResults(results);
}

// Render Query Results
function displayResults(results) {
	const resultsDiv = document.getElementById("results");
	resultsDiv.innerHTML = ""; // Clear previous results

	if (results.length > 0) {
		const table = document.createElement("table");
		table.className =
			"table-auto border-collapse border border-gray-400 w-full";

		const columns = results[0].columns;
		const values = results[0].values;

		// Table Header
		const headerRow = document.createElement("tr");
		columns.forEach((col) => {
			const th = document.createElement("th");
			th.textContent = col;
			th.className = "border border-gray-400 px-4 py-2 bg-gray-200";
			headerRow.appendChild(th);
		});
		table.appendChild(headerRow);

		// Table Rows
		values.forEach((row) => {
			const tr = document.createElement("tr");
			row.forEach((value) => {
				const td = document.createElement("td");
				td.textContent = value;
				td.className = "border border-gray-400 px-4 py-2";
				tr.appendChild(td);
			});
			table.appendChild(tr);
		});

		resultsDiv.appendChild(table);
	} else {
		resultsDiv.textContent = "No results found.";
	}
}
// script.js
document.addEventListener("DOMContentLoaded", function () {
	fetch("navbar.html")
		.then((response) => response.text())
		.then((navbarHtml) => {
			document.getElementById("navbar-container").innerHTML = navbarHtml;
		});
});
