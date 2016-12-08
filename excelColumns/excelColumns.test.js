//Test suite for excelColumns
var expect = require('chai').expect;
var excelColumns = require('./excelColumns.js');

describe('Excel Column Headers', function() {

  var testArrays = [
    0,
    1,
    4,
    26,
    27,
    56,
    26 * 27 - 10,
    26 * 28 - 1
  ];

  var answers = [
    'A',
    'B',
    'E',
    'AA',
    'AB',
    'BE',
    'ZQ',
    'AAZ'
  ];

  testArrays.forEach(function(test, index) {
    it('should find the header for column index ' + test, function() {
      expect(excelColumns(test)).to.equal(answers[index]);
    });
  });

});