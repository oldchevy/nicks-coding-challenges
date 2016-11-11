//Test suite for rotateMatrix
var expect = require('chai').expect;
var rotateMatrix = require('./rotateMatrix');

describe('Rotate Matrix', function() {

  var testArrays = [
    { arr: [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]],
      answer: [[7, 4, 1],
              [8, 5, 2],
              [9, 6, 3]] },

    { arr: [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]],
      answer: [[13, 9, 5, 1],
              [14, 10, 6, 2],
              [15, 11, 7, 3],
              [16, 12, 8, 4]] },

    { arr: [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]],
      answer: [[21, 16, 11, 6, 1],
              [22, 17, 12, 7, 2],
              [23, 18, 13, 8, 3],
              [24, 19, 14, 9, 4],
              [25, 20, 15, 10, 5]] },

  ];

  testArrays.forEach(function(test) {
    it('should properly rotate the matrix: ' + JSON.stringify(test.arr), function() {
      expect(rotateMatrix(test.arr)).to.deep.equal(test.answer);
    });
  });

});