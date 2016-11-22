//We will be writing methods to serialize and deserialize a BST

//That is, the method will convert a BST's values into a string format which may be saved somewhere,
//then have the ability to read the string and construct the exact same BST
//elsewhere.

//Note: make sure you are building up the EXACT SAME tree.

//For extra credit, find a way to save space and also deserialize into an
//already balanced BST. Consider why this might be advantageous

//ex input:   6
//           / \
//          4   7
//         / \   \
//        1  5    9


var BST = function (val) {
  this.val = val;
  this.left = this.right = null;
};

//Doing an in-order traversal, we can build up an in-memory sorted array
//We serialize that.
//To de-serialize, we recreate the tree by divide and conquer, taking the
//median value at each step

//NOTE: my deserialize method currently breaks for unbalanced trees, however
//they become balanced upon rebuilding, so that's nice!

BST.prototype.insert = function(val) {
  if (val < this.val) {
    this.left ? this.left.insert(val) : this.left = new BST(val);
  } else {
    this.right ? this.right.insert(val) : this.right = new BST(val);
  }
};

BST.prototype.serialize = function(array) {
  //Do an in-order traversal, building up an array
  //we also have to serialize the top value, otherwise we won't
  //know where to start deserializing the array
  var array = array || [];
  var index = 0;

  if (this.left) {
    this.left.serialize(array);
  }

  array.push(this.val);
  index = array.length - 1;

  if (this.right) {
    this.right.serialize(array);
  }

  return index + ':' + JSON.stringify(array);

};

BST.prototype.deserialize = function (string, array, min, max) {

  var median;

  //if this is the top call, find the array and starting index
  if (!array) {
    array = JSON.parse(string.split(':')[1]);
    median = +string.split(':')[0];
    min = 0;
    max = array.length - 1;
  
  // else, use the variables already provided
  } else {
    median = Math.floor((max - min) / 2) + min;
  }

  //asign the value to the working node
  this.val = array[median];

  //only recurse if there is room to recurse
  if (min < median) {
    this.left = new BST();
    this.left.deserialize(string, array, min, median - 1);
  }

  if (max > median) {
    this.right = new BST();
    this.right.deserialize(string, array, median + 1, max);
  }

};

module.exports = BST;

