const table = document.getElementById("sampleTable");
function insert_Row() {
	// let chid1 = table.getElementsByTagName('tr')[0];
	// let row = document.createElement("tr");
	// let co1 = document.createElement("td");
	// col1.innerText = "New Cell1";
	// let col2 = document.createElement("td");
	// col2.innerText = "New Cell2";
	// row.append(col1,col2);
	// table.insertBefore(row, chid1);
    let row = table.insertRow(0); // insert a new row at the top of the table
    let cell1 = row.insertCell(0); // insert a new cell at the first position of the row
    let cell2 = row.insertCell(1); // insert a new cell at the second position of the row
    cell1.innerText = "New Cell1"; // set the text of the first cell
    cell2.innerText = "New Cell2"; // set the text of the second cell

}
