// Initialize sql.js
document.addEventListener("DOMContentLoaded", () => {
	// Fetch data from Flask API
	fetch("/api/data")
		.then((response) => response.json())
		.then((data) => {
			if (data.length > 0) {
				// Dynamically populate table headers
				const tableHeader = document.getElementById("table-header");
				const columns = Object.keys(data[0]);
				columns.forEach((col) => {
					const th = document.createElement("th");
					th.textContent = col;
					tableHeader.appendChild(th);
				});

				// Populate table rows
				const tableBody = document.getElementById("table-body");
				data.forEach((row) => {
					const tr = document.createElement("tr");
					columns.forEach((col) => {
						const td = document.createElement("td");
						td.textContent = row[col];
						tr.appendChild(td);
					});
					tableBody.appendChild(tr);
				});
			}
		})
		.catch((error) => console.error("Error fetching data:", error));
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
	fetch("./static/navbar.html")
		.then((response) => response.text())
		.then((navbarHtml) => {
			document.getElementById("navbar-container").innerHTML = navbarHtml;
		});
});
