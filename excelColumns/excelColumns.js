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

var columns = new Array(26 * 28);
for (var i = 0; i < columns.length; i++) {
  columns[i] = i;
}


var excelColumn = (i) => {

  var string = '';
  var multiple = Math.floor(i / 26);
  var remainder = i % 26;

  if (multiple > 0) {
    string += excelColumn(multiple - 1);
  }
 
  string += letters[remainder];

  return string;
};

module.exports = excelColumn;

console.log(columns.map((col, i) => excelColumn(i)).slice(-100));
