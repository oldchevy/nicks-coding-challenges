//You are given a binary tree in which each node is an integer (positive or negative)
//Your job is to find all the distinct paths that could add up to a target value passed in

//Extend it upon the given binary tree class, so you can call it on any node that's a binary tree

//Constraints: first, try to achieve a brute force solution. Now try to find it in O(n) time,
//and O(log n) space.


var BTree = function(val) {
  this.left = null;
  this.right = null;
  this.val = val;
};

//Maybe you need this, maybe you don't. Idk
BTree.prototype.add = function(val, type) {

  if (type === 'right') {
    this.right = new BTree(val);
    return val;
  } else if (type === 'left') {
    this.left = new BTree(val);
    return val;
  } else {
    throw Error('Binary tree can only add a left or right node');
  }

};

BTree.prototype.pathsToSum = function(target, sum, hash) {
  //Todo: Implement this~~~
};


module.exports = BTree;