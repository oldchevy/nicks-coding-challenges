//Test suite for findPivot
var expect = require('chai').expect;
var combineParens = require('./combineParens.js');

describe('Combine Parens', function() {

  var testArrays = [
    ['()'],
    ['(())', '()()'],
    ['((()))', '(()())', '(())()', '()(())', '()()()'],
    [ '(((())))',
      '((()()))',
      '((())())',
      '((()))()',
      '(()(()))',
      '(()()())',
      '(()())()',
      '(())(())',
      '(())()()',
      '()((()))',
      '()(()())',
      '()(())()',
      '()()(())',
      '()()()()']
  ];

  testArrays.forEach(function(test, index) {
    it('should calculate combinations for ' + (index + 1), function() {
      expect(combineParens(index + 1)).to.have.members(test);
    });
  });

});