var MedianStream = function () {
  this._heap = new Heap();
  this.size = function() {
    return this._heap.size();
  };
};

MedianStream.prototype = {
  insert: function (val) {
    this._heap.insert(val);
  },
  peekMedian: function () {
    //for now I have to take n/2 elements, but later on we will try to get constant access
    var median, prev;
    var copyHeap = new Heap(null, this._heap._storage.slice());
    
    var half = Math.floor(this.size() / 2);

    if (this.size() % 2 !== 0) {
      for (var i = 0; i <= half; i++) {
        median = copyHeap.remove();
      }
      return median;
    } else {
      for (i = 0; i <= half; i++) {
        if (i === half - 1) {
          prev = copyHeap.remove();
        } else {
          median = copyHeap.remove();
        }
      }
      return (median + prev) / 2;
    }

    //Now that I have this naive solution, I have an idea for a much more optimal solution.
    //This data structure will be comprised of two heaps
    //One will be top-down and the other bottom-up
    //If we keep the sizes the same or as close to the same as possible, we will know the median
      //The median will always be the first entry in the bigger heap, or the average between the first of both
      //For example, if the top-down heap has 6 entries and the bottom-down heap has 5
        //we are inserting a number that belongs in the top-down heap, but we have to balance out the heaps
          //we insert the new number in the top-down heap
          //we pop off the first entry in the top-down heap
          //we insert it in the bottom-up heap
          //now both heaps have a size of 6
  },


  size: function () {
    return this.size;
  }
};



var Heap = function(comparator, prevArray) {
  this._storage = prevArray || [];
  this.comparator = comparator || function(a, b) { return a - b; };
  this.size = function() {
    return this._storage.length;
  };
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
  var currIndex = this.size - 1;
  var parentIndex = this.findParent(currIndex);
  
  while (this.comparator(this._storage[currIndex], this._storage[parentIndex])) {
    this.swap(currIndex, parentIndex);
    currIndex = parentIndex;
    parentIndex = this.findParent(currIndex);
  }
  
};

Heap.prototype.remove = function(value) {
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


var testStream = new MedianStream();
testStream.insert(1);
testStream.insert(7);
testStream.insert(2);
testStream.insert(6);

console.log(testStream.peekMedian());
