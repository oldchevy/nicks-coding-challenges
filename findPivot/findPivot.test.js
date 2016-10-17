//Test suite for findPivot
var expect = require('chai').expect;
var findPivot = require('./findPivot');

describe('Find Pivot', function() {

  var testArrays = [
    { arr: ['apple', 'bear', 'cat', 'dog', 'eagle', 'falcon'],
      answer: null }, //no pivot returns null
    { arr: ['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat'],
      answer: 3 }, //pivot in right half, even number
    { arr: ['eagle', 'falcon', 'apple', 'bear', 'cat', 'dog'],
      answer: 2 }, //pivot in left half, even number
    { arr: [ 'eggs', 'falcon', 'apple', 'bear', 'cat', 'dog', 'eagle'], 
      answer: 2 }, //pivot in first entry, odd number
    { arr: ['mite', 'penguin', 'rhino', 'tiger', 'university', 'carrot'],
      answer: 5 }, //pivot in last entry, even number
    { arr: ['mite', 'penguin', 'rhino', 'tiger', 'university', 'velvet', 'carrot'], 
      answer: 6 } //pivot in last index, odd number
  ];


  testArrays.forEach(function(test) {
    it('should find the pivot for ' + JSON.stringify(test.arr), function() {
      expect(findPivot(test.arr)).to.equal(test.answer);
    });
  });

});