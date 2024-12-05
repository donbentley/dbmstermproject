async function fetchData(queryType) {
	try {
		const response = await fetch(`/api/${queryType}`);
		const data = await response.json();

		// Populate tables based on the query type
		if (queryType === "query1") {
			populateTable(
				"2000-2001",
				data["2000-2001"],
				"table-header-2000-2001",
				"table-body-2000-2001"
			);
			populateTable(
				"2001-2002",
				data["2001-2002"],
				"table-header-2001-2002",
				"table-body-2001-2002"
			);
			populateTable(
				"2002-2003",
				data["2002-2003"],
				"table-header-2002-2003",
				"table-body-2002-2003"
			);
		} else if (queryType === "query2") {
			populateTable(
				"2000-2001",
				data["2000-2001"],
				"table-header-2000-2001",
				"table-body-2000-2001"
			);
			populateTable(
				"2001-2002",
				data["2001-2002"],
				"table-header-2001-2002",
				"table-body-2001-2002"
			);
			populateTable(
				"2002-2003",
				data["2002-2003"],
				"table-header-2002-2003",
				"table-body-2002-2003"
			);
		} else if (queryType === "query3") {
			populateTable(
				"2000-2001",
				data["2000-2001"],
				"table-header-2000-2001",
				"table-body-2000-2001"
			);
			populateTable(
				"2001-2002",
				data["2001-2002"],
				"table-header-2001-2002",
				"table-body-2001-2002"
			);
			populateTable(
				"2002-2003",
				data["2002-2003"],
				"table-header-2002-2003",
				"table-body-2002-2003"
			);
		}
		if (queryType === "query4") {
			populateTable(
				"1990s",
				data["1990s"],
				"table-header-1990s",
				"table-body-1990s"
			);
			populateTable(
				"2000s",
				data["2000s"],
				"table-header-2000s",
				"table-body-2000s"
			);
			populateTable(
				"2010s",
				data["2010s"],
				"table-header-2010s",
				"table-body-2010s"
			);
			populateTable(
				"Top Salaries",
				data["top_salaries"],
				"table-header-top-salaries",
				"table-body-top-salaries"
			);
		}
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
// Function to populate table headers and rows
// Function to populate table headers and rows
function populateTable(key, rows, headerId, bodyId) {
	const header = document.getElementById(headerId);
	const body = document.getElementById(bodyId);

	// Clear existing content
	header.innerHTML = "";
	body.innerHTML = "";

	if (rows.length > 0) {
		// Get column names
		let columns = Object.keys(rows[0]);

		// Adjust column order if needed
		const rankIndex = columns.indexOf("Rank");
		if (rankIndex > -1) columns = [columns.splice(rankIndex, 1)[0], ...columns];

		// Dynamically create headers
		columns.forEach((col) => {
			const th = document.createElement("th");
			th.className = "px-6 py-3 text-left font-bold bg-gray-100 uppercase"; // Minimum width for visibility
			th.textContent = col.replace(/_/g, " ");
			header.appendChild(th);
		});

		// Populate table rows
		rows.forEach((row, rowIndex) => {
			const tr = document.createElement("tr");
			tr.className = rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50";

			columns.forEach((col) => {
				const td = document.createElement("td");
				td.className = "px-6 py-3 text-gray-600";
				td.style.minWidth = "150px"; // Ensure all data fits

				// Format data
				if (col.toLowerCase().includes("salary")) {
					td.textContent = `$${row[col].toLocaleString()}`;
					td.classList.add("text-green-600", "font-semibold");
				} else {
					td.textContent = row[col];
				}

				tr.appendChild(td);
			});

			body.appendChild(tr);
		});
	} else {
		// Handle no data case
		const tr = document.createElement("tr");
		const td = document.createElement("td");
		td.colSpan = 4;
		td.className = "text-center py-3 bg-red-100 text-red-600 font-semibold";
		td.textContent = `No data available for ${key}`;
		tr.appendChild(td);
		body.appendChild(tr);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	fetch("./static/navbar.html")
		.then((response) => response.text())
		.then((navbarHtml) => {
			document.getElementById("navbar-container").innerHTML = navbarHtml;
		});
});
