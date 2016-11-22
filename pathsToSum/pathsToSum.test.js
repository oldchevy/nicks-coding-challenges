//Testing suite for pathsTosum

var expect = require('chai').expect;
var BTree = require('./pathsToSum');

describe('Paths to Sum with a B-Tree', function() {

  var test = new BTree(2);
  test.right = new BTree(5);
  test.right.right = new BTree(1);
  test.right.left = new BTree(3);
  test.right.left.left = new BTree(-2);
  test.left = new BTree(4);
  test.left.left = new BTree(-1);
  test.left.left.right = new BTree(3);
  test.left.right = new BTree(-2);

  it('should find the correct number of paths to a target', function() {
    expect(test.pathsToSum(8)).to.equal(4);
  });

  it('should be able to find paths that don\'t start at the root', function() {
    expect(test.pathsToSum(5)).to.equal(2);
    expect(test.pathsToSum(1)).to.equal(2);
  });
});