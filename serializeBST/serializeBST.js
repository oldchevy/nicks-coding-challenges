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


BST.prototype.insert = function(val) {
  if (val < this.val) {
    this.left ? this.left.insert(val) : this.left = new BST(val);
  } else {
    this.right ? this.right.insert(val) : this.right = new BST(val);
  }
};

BST.prototype.serialize = function() {
  //Todo: implement me!
};

BST.prototype.deserialize = function () {
  //Todo: implement me!
};

module.exports = BST;

