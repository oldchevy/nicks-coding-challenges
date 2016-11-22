//Test suite for rotateMatrix
var expect = require('chai').expect;
var badNeighbors = require('./badNeighbors');

describe('Alternate Mining', function() {

  var testArrays = [
    { arr: [10, 3, 2, 5, 7, 8],
      answer: 19 },
    { arr: [11, 15],
      answer: 15 },
    { arr: [7, 7, 7, 7, 7, 7, 7],
      answer: 21 },
    { arr: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
      answer: 16 },
    { arr: [94, 40, 49, 65, 21, 21, 106, 80, 92, 81, 679, 4, 61,  
            6, 237, 12, 72, 74, 29, 95, 265, 35, 47, 1, 61, 397,
            52, 72, 37, 51, 1, 81, 45, 435, 7, 36, 57, 86, 81, 72],
      answer: 2926 }

  ];

  testArrays.forEach(function(test) {
    it('should find the maximum donation from these neighbors: ' + JSON.stringify(test.arr), function() {
      expect(badNeighbors(test.arr)).to.deep.equal(test.answer);
    });
  });

});