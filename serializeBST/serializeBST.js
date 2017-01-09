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

/*
TIME AND SPACE COMPLEXITY ANALYSIS:

Solution 1: using a heap style array.
  This solution is O(n) time wise, visiting each node only once
  for both serialize and deserialize

  Space wise we have a lot of potentially unused space, especially
  if the tree is very unbalanced. The array will need to have O(2^n) entries
  where n is the deepest level node

Solution 2: in this solution the serialized array is stored sorted, using a binary
  search style method. This ends up automatically sorting the input
  tree, meaning when it is deserialized it is automatically balanced.

  This solution can be useful, especially considering the serialized 
  tree now only takes up O(N) space. Assuming you care that your BST's 
  are balanced (why else would you use one), this method
  would be advantageous over the first one.

*/


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

BST.prototype.serialize = function(array, index) {

  //Solution 1: using heap style indeces
  var array = array || [];
  var index = index || 0;

  array[index] = this.val;

  if (this.left) {
    this.left.serialize(array, (index + 1) * 2 - 1);
  }

  if (this.right) {
    this.right.serialize(array, (index + 1) * 2);
  }

  return JSON.stringify(array);


  //Solution 2: 

  // //an in-order traversal gives us a sorted array back

  // var array = array || [];
  // var index = index || 0;
  // if (this.left) {
  //   this.left.serialize(array);
  // }

  // array.push(this.val);
  // index = array.length - 1;

  // if (this.right) {
  //   this.right.serialize(array);
  // }

  // return index + ':' + JSON.stringify(array);

};

BST.prototype.deserialize = function (string, array, index) {



  array = array || JSON.parse(string);
  index = index || 0;

  this.val = array[index];

  //if there are children nodes, declare new left / right nodes
  var leftChildIndex = (index + 1) * 2 - 1;
  var rightChildIndex = (index + 1) * 2;

  if (array[leftChildIndex]) {
    //declare new node and assign it to left
    this.left = new BST();
    //recurse
    this.left.deserialize(string, array, leftChildIndex);
  }

  if (array[rightChildIndex]) {
    this.right = new BST();
    this.right.deserialize(string, array, rightChildIndex);
  }


  //Solution 2: (note: also needs two more args, min and max, and no index arg)

  // var median;

  // //if this is the top call, find the array and starting index
  // if (!array) {
  //   array = JSON.parse(string.split(':')[1]);
  //   median = +string.split(':')[0];
  //   min = 0;
  //   max = array.length - 1;
  
  // // else, use the variables already provided
  // } else {
  //   median = Math.floor((max - min) / 2) + min;
  // }

  // //asign the value to the working node
  // this.val = array[median];

  // //only recurse if there is room to recurse
  // if (min < median) {
  //   this.left = new BST();
  //   this.left.deserialize(string, array, min, median - 1);
  // }

  // if (max > median) {
  //   this.right = new BST();
  //   this.right.deserialize(string, array, median + 1, max);
  // }

};

module.exports = BST;

