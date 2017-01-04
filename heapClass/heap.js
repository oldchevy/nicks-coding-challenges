//the core functionality of heaps are accomplished with insert and remove,
//however you will need to complete the helper functions as well

//HINT: a binary tree can be represented as an array,
//where given any index a relationship can be applied to find
//that index's parent and children.

//Heaps are able to insert a value in log(N) time and also
//remove the min (or max) value in log(N) time. To do this numbers
//must 'bubble up' through layers when inserting / removing.

var Heap = function(comparator, prevArray) {
  //what properties does the constructor need to be assigning?
  //what do you think these two args I gave you are for?
};

Heap.prototype.size = function() {
  //implement me!
};

Heap.prototype.findParent = function(nodeIndex) {
  //implement me!
};

Heap.prototype.findChildren = function(nodeIndex) {
  //implement me!
};

Heap.prototype.swap = function(i1, i2) {
  //implement me!
};

Heap.prototype.insert = function(value) {

  //implement me!
  
};

Heap.prototype.remove = function() {
  //implement me!
};

module.exports = Heap;