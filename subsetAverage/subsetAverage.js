// Write a matrix class in JS that takes in an array of arrays as input
// The class has one method, subsetAverage.
// subsetAverage returns the average of the rectangular subset

// subsetAverage's time complexity SHOULD NOT depend on the size of the subset
// optimize space complexity as best as possible

var Matrix = function(arrayOfArrays) { 
  this._storage = arrayOfArrays;
  this.columns = arrayOfArrays[0].length - 1;
  this.rows = arrayOfArrays[0].length - 1;

  
};

Matrix.prototype.subsetAverage = function(leftCol, rightCol, topRow, bottomRow) { 

  var sum = 0;
  var count = 0;
  var result = 0;

  //If beginning row or col args are out of bounds, throw an error
  if (leftCol > this.columns || topRow > this.rows) {
    throw error('Out of bounds');
  }

  //Implicitly take the last row / column if args provided are out of bounds
  rightCol = rightCol > this.columns ? this.columns : rightCol;
  bottomRow = bottomRow > this.rows ? this.rows : bottomRow;

  //This is the naive way which depends on input size
  for (var row = topRow; row <= bottomRow; row++) {
    for (var col = leftCol; col <= rightCol; col++) {
      count++;
      sum += this._storage[row][col];
    }
  }

  return sum / count;

};

var myMatrix = new Matrix([
  [1, 4, 7, 1],
  [3, 5, 9, 3],
  [8, 1, 4, 6]
]);

console.log(myMatrix.subsetAverage(0, 0, 0, 0)); // returns 1
console.log(myMatrix.subsetAverage(2, 3, 1, 2)); // returns 5.5 subset is 9, 3, 4, 6, 

