// Display data table
addTable(data);

// // Select the button
var button = d3.select("#thisButton");

// // Select the form
var form = d3.select("#thisForm");

// // Create event handlers for clicking the button or pressing the enter key
button.on("click", filterByDate);
form.on("submit",filterByDate);

// print test
function filterByDate(){
        // call clear table
        clearTable();

        // Prevent the page from refreshing
        d3.event.preventDefault();
        // Select the input element and get the raw HTML node
        let inputDate = d3.select("#datetime").property("value");
        
        // filter by inputDate
        function dateFilter(dataToFilter){
            return dataToFilter.datetime == inputDate;
        };
        let outputTable = data.filter(dateFilter);
        // create Table
        addTable(outputTable);
};

// create function to add table
function addTable (tableData){
    let table_data = tableData;
    
    table_data.forEach(x=>{
        // getting each eleement in the table as object
        let rowObject = Object.values(x);
        // adding new row for each object
        let newRow = d3.select("tbody").append("tr");
        // append new row value
        rowObject.forEach(y=> newRow.append("td").text(y));
    }) ;
};

function clearTable(){
    d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};