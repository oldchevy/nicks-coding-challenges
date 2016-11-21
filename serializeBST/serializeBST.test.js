//Test suite for serialize and deserialize BST

//Test suite for petShelter

//Test suite for findPivot
var expect = require('chai').expect;
var BST = require('./serializeBST');

describe('Serialize / Deserialize BST', function() {

  var tree = new BST(6);
  tree.insert(4);
  tree.insert(7);
  tree.insert(1);
  tree.insert(5);
  tree.insert(9);

  it('should handle an already balanced tree', function() {
    var serialized = tree.serialize();
    var treeSomeWhereElse = new BST();
    treeSomeWhereElse.deserialize(serialized);
    expect(tree).to.deep.equal(treeSomeWhereElse);
  });


  it('should handle an unbalanced tree', function() {
    tree.insert(10);
    tree.insert(11);
    tree.insert(12);

    treeSomeWhereElse = new BST();
    treeSomeWhereElse.deserialize(serialized);
    expect(tree).to.deep.equal(treeSomeWhereElse);
    
  });
});