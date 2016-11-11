//Test suite for findPivot
var expect = require('chai').expect;
var waterBlocks = require('./waterBlocks');

describe('Water Blocks', function() {

  var testArrays = [
    { arr: [5, 2, 3, 2, 1, 3],
      answer: 4 },
    { arr: [2, 0, 3],
      answer: 2 },
    { arr: [3, 0, 0, 3],
      answer: 6 },
    { arr: [4, 1, 2, 3], 
      answer: 3 },
    { arr: [3, 2, 1, 4],
      answer: 3 },
    { arr: [3, 1, 4, 2, 5], 
      answer: 4 },
    { arr: [4, 1, 3, 1, 4], 
      answer: 7 },
    { arr: [3, 1, 2, 4, 3, 2, 1], 
      answer: 3 },
    { arr: [3, 1, 4, 2, 5], 
      answer: 4 },
    { arr: [1, 4, 1, 3, 1, 5, 3, 1, 4, 3, 1, 2, 3, 2, 2, 3, 4], 
      answer: 23 },
    { arr: [1000, 2, 5, 10000], 
      answer: 1993 },

  ];


  testArrays.forEach(function(test) {
    it('should calculate valid water spots for ' + JSON.stringify(test.arr), function() {
      expect(waterBlocks(test.arr)).to.equal(test.answer);
    });
  });

});