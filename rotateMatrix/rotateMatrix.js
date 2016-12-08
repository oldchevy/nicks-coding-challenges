//Write a function that rotates a matrix 90 degrees (either direction, don't matter to me)
//Constraints --> your goal is to do this in constant space and no more than one visit per entry


//Ex: 
//  [[1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]]

//Will become 
//  [[13, 9, 5, 1],
//   [14, 10, 6, 2],
//   [15, 11, 7, 3],
//   [16, 12, 8, 4]

// var rotateMatrix = function(matrix) {
//   //Start at the top row
//   var height = matrix.length - 1;
//   var width = matrix[0].length - 1;
//   var begin = 0;
//   var end = width;
//   var temp = matrix[0][0];

//   //In the outer loop we go down to the next row for processing
//   for (var k = begin; k < height / 2; k++) {
//     begin = k;
//     end = width - k;

//     //Note: we don't want to visit the very last entry
//     for (var i = begin; i < end; i++) {
//       //swap first with first in down col
//       var save = matrix[i][end];
//       temp = matrix[begin][i];
//       matrix[i][end] = temp;
//       temp = save;

//       //swap right col pos with bottom row pos
//       save = matrix[end][end + (begin - i)];
//       matrix[end][end + (begin - i)] = temp;
//       temp = save;

//       //swap bottom row pos with left col pos
//       save = matrix[end + (begin - i)][begin];
//       matrix[end + (begin - i)][begin] = temp;
//       temp = save;

//       //swap out final val
//       save = matrix[begin][i];
//       matrix[begin][i] = temp;
//       temp = save;
//     }
    
//   }

//   return matrix;
// };

var rotateMatrix = function(A) {
  //we gotta go row by row, then layer by layer down to the center
  var i, j;
  var start = 0;
  var temp1, temp2;
  var size = A.length - 1;
  
  for (i = 0; i < size / 2; i++) {
      //this is the 'layer' traversal
    for (j = start; j < size - start; j++) {
      //swapping around the edges here
      temp1 = A[j][size - start];
      A[j][size - start] = A[i][j];
      
      temp2 = A[size - i][size - j];
      A[size - i][size - j] = temp1;
      
      temp1 = A[size - j][start];
      A[size - j][start] = temp2;
      
      A[i][j] = temp1;

    }    
    start++; 
  }
  
  return A;
};

module.exports = rotateMatrix;



