//the core functionality of heaps are accomplished with insert and remove,
//however you will need to complete the helper functions as well

//HINT: a binary tree can be represented as an array,
//where given any index a relationship can be applied to find
//that index's parent and children.

//Heaps are able to insert a value in log(N) time and also
//remove the min (or max) value in log(N) time. To do this numbers
//must 'bubble up' through layers when inserting / removing.

var Heap = function(comparator, prevArray) {
  this._storage = prevArray || [];
  this.comparator = comparator || function(a, b) { return a - b; };
};

Heap.prototype.size = function() {
  return this._storage.length;
};

Heap.prototype.findParent = function(nodeIndex) {
  return Math.floor((nodeIndex - 1) / 2); 
};

Heap.prototype.findChildren = function(nodeIndex) {
  var multiply = (nodeIndex + 1) * 2;
  return [multiply - 1, multiply];
};

Heap.prototype.swap = function(i1, i2) {
  var temp = this._storage[i1];
  this._storage[i1] = this._storage[i2];
  this._storage[i2] = temp;
};

Heap.prototype.insert = function(value) {
  
  this._storage.push(value);
  var currIndex = this.size() - 1;
  var parentIndex = this.findParent(currIndex);  

  while (this.comparator(this._storage[currIndex], this._storage[parentIndex]) < 0) {
    this.swap(currIndex, parentIndex);
    currIndex = parentIndex;
    parentIndex = this.findParent(currIndex);
  }
  
};

Heap.prototype.remove = function() {
  this.swap(0, this.size() - 1);
  var result = this._storage.pop();
  var currIndex = 0;
  var children = this.findChildren(currIndex);
  var child1 = this.comparator(this._storage[children[0]], this._storage[currIndex]);
  var child2 = this.comparator(this._storage[children[1]], this._storage[currIndex]);
  
  while (child1 < 0 || child2 < 0) {
    if (child1 < child2) {
      this.swap(currIndex, children[0]);
      currIndex = children[0];
    } else {
      this.swap(currIndex, children[1]);
      currIndex = children[1];
    }
    
    children = this.findChildren(currIndex);
    child1 = this.comparator(this._storage[children[0]], this._storage[currIndex]);
    child2 = this.comparator(this._storage[children[1]], this._storage[currIndex]);
  }
  
  return result;
};

module.exports = Heap;