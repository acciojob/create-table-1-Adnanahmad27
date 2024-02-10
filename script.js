const table = document.getElementById("sampleTable");
function insert_Row() {
	let chid1 = table.getElementsByTagName('tr')[0];
	let row = document.createElement("tr");
	let col1 = document.createElement("td");
	col1.innerText = "New Cell1";
	let col2 = document.createElement("td");
	col2.innerText = "New Cell2";
	row.append(col1,col2);
	table.insertBefore(row, chid1);
  
}
