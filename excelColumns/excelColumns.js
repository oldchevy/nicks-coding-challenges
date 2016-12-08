//write an algorithm to figure out what the column header
// should be for an excel spreadsheet.

//Ex: 0 -> A
//    1 -> B
//    25 -> AA
//    51 -> BA
//    26^2 - 1 -> AAA
// Etc.


var letters = ['A', 'B', 'C', 'D', 'E', 
               'F', 'G', 'H', 'I', 'J', 
               'K', 'L', 'M', 'N', 'O', 
               'P', 'Q', 'R', 'S', 'T', 
               'U', 'V', 'W', 'X', 'Y', 'Z'];



var excelColumn = (i) => {
  //implement me!
};

module.exports = excelColumn;


//This part is so you can see a little easier whats going on with your code than the test cases
var columns = new Array(26 * 28);
for (var i = 0; i < columns.length; i++) {
  columns[i] = i;
}
console.log(columns.map((col, i) => excelColumn(i)).slice(-100));

