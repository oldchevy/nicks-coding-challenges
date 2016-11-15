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

  //There is a very in-depth walk through of how this works in 
  //Cracking the Coding Interview... I would recommend looking at
  //that, but basically you are tracking how many times you've
  //seen a sum. If you're on a node and looking at the runningsum - target,
  //and you find something in the hash, you know there was a sequence
  //seen where the sum was 'target', therefore you put it in your total count.

  //If that doesn't immediately make sense to you, 
  //definitely go look at the CTCI passage.
  //It took me a long time to wrap my head around this

  sum = sum === undefined ? this.val : sum + this.val;
  hash = hash || {};

  var count = hash[sum - target] || 0;
  
  if (sum === target) {
    count++;
  }

  hash[sum] = hash[sum] ? hash[sum]++ : 1;

  if (this.left) {
    count += this.left.pathsToSum(target, sum, hash);
  }
  if (this.right) {
    count += this.right.pathsToSum(target, sum, hash);    
  }

  hash[sum]--;


  return count;

};


module.exports = BTree;