var expect = require('chai').expect;
var overlapFinder = require('./rectangleOverlap');

var customComparator = (a, b) => {
  if (a[0] < b[0]) {
    return -1;
  } else if (a[0] === b[0]) {
    if (a[1] < b[1]) {
      return -1;
    } else {
      return 1;
    }
  } else {
    return 1;

  }
};

describe('Rectangle Overlap Finder', () => {

  var one;
  var testCases = [
    {
      message: 'should find Quadrant 1 overlap',
      rectangle1: [[1, 0], [1, 5], [3, 5], [3, 0]],
      rectangle2: [[2, 7], [2, 4], [7, 7], [7, 4]],
      solution: [[2, 4], [2, 5], [3, 4], [3, 5]]
    },
    {
      message: 'should handle coordinates in any order',
      rectangle1: [[1, 5], [3, 5], [1, 0], [3, 0]],
      rectangle2: [[7, 7], [2, 7], [2, 4], [7, 4]],
      solution: [[2, 4], [2, 5], [3, 4], [3, 5]]
    },
    {
      message: 'should find Quadrant 2 overlap',
      rectangle1: [[1, 1], [1, -1], [-1, -1], [-1, 1]],
      rectangle2: [[1, 3], [1, 0], [-4, 3], [-4, 0]],
      solution: [[-1, 0], [-1, 1], [1, 0], [1, 1]]
    },
    {
      message: 'should find Quadrant 3 overlap',
      rectangle1: [[1, 1], [1, -1], [-1, -1], [-1, 1]],
      rectangle2: [[0, 0], [0, -4], [-4, -4], [0, -4]],
      solution: [[-1, -1], [-1, 0], [0, -1], [0, 0]]
    },
    {
      message: 'should find Quadrant 4 overlap',
      rectangle1: [[1, 1], [1, -1], [-1, -1], [-1, 1]],
      rectangle2: [[0, 0], [0, -4], [-4, 4], [0, 4]],
      solution: []
    },
    {
      message: 'should find no overlap from above',
      rectangle1: [[1, 0], [1, 5], [3, 5], [3, 0]],
      rectangle2: [[-1, 0], [-2, -7], [-7, -7], [-7, -4]],
      solution: -1
    },
    {
      message: 'should find no overlap from below',
      rectangle1: [[1, 0], [1, 5], [3, 5], [3, 0]],
      rectangle2: [[2, 5], [2, 7], [7, 7], [7, 5]],
      solution: -1
    },
  ];
  

  testCases.forEach(oneCase => {
    it(oneCase.message, () => {
      one = overlapFinder(oneCase.rectangle1, oneCase.rectangle2);
      if (oneCase.solution === -1) {
        expect(one).to.equal(-1);
      } else {
        one.sort(customComparator);
        expect(one).to.deep.equal(oneCase.solution);
      }
    });
  });

});