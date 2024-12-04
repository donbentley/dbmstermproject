async function fetchData(queryType) {
    try {
        const response = await fetch(`/api/${queryType}`);
        const data = await response.json();

        // Populate tables based on the query type
        if (queryType === 'query1') {
            populateTable('2000-2001', data['2000-2001'], 'table-header-2000-2001', 'table-body-2000-2001');
            populateTable('2001-2002', data['2001-2002'], 'table-header-2001-2002', 'table-body-2001-2002');
            populateTable('2002-2003', data['2002-2003'], 'table-header-2002-2003', 'table-body-2002-2003');
        } else if (queryType === 'query2') {
            populateTable('2000-2001', data['2000-2001'], 'table-header-2000-2001', 'table-body-2000-2001');
            populateTable('2001-2002', data['2001-2002'], 'table-header-2001-2002', 'table-body-2001-2002');
            populateTable('2002-2003', data['2002-2003'], 'table-header-2002-2003', 'table-body-2002-2003');
        } else if (queryType === 'query3') {
            populateTable('2000-2001', data['2000-2001'], 'table-header-2000-2001', 'table-body-2000-2001');
            populateTable('2001-2002', data['2001-2002'], 'table-header-2001-2002', 'table-body-2001-2002');
            populateTable('2002-2003', data['2002-2003'], 'table-header-2002-2003', 'table-body-2002-2003');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to populate table headers and rows
function populateTable(yearRange, rows, headerId, bodyId) {
    const header = document.getElementById(headerId);
    const body = document.getElementById(bodyId);

    // Clear any existing content
    header.innerHTML = '';
    body.innerHTML = '';

    if (rows.length > 0) {
        // Create header cells based on the keys of the first row
        const columns = Object.keys(rows[0]);
        columns.forEach(col => {
            const th = document.createElement('th');
            th.textContent = col;
            header.appendChild(th);
        });

        // Create rows for the table body
        rows.forEach(row => {
            const tr = document.createElement('tr');
            columns.forEach(col => {
                const td = document.createElement('td');
                td.textContent = row[col];
                tr.appendChild(td);
            });
            body.appendChild(tr);
        });
    } else {
        // Handle no data case
        const td = document.createElement('td');
        td.colSpan = columns.length; // Span across all columns
        td.textContent = `No data available for ${yearRange}`;
        td.className = 'text-center'; // Center align the message
        const tr = document.createElement('tr');
        tr.appendChild(td);
        body.appendChild(tr);
    }
}
