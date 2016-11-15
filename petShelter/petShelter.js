// An animal shelter, which holds just cats and dogs, operates on a strictly 'first-in first out' basis. That is,
//potential adopters have no choice as to which pet they get. They can specify if they would like a dog or a cat,
//but that's it. Write the data structures and systems which will implement this system. You need methods enqueue, dequeueAny,
//dequeueDog, and dequeueCat.

//You can use the linkedList data structure provided below


var Shelter = function() {
  //Do stuff here.
};

Shelter.prototype.enqueue = function(pet) {
  //Maybe more args are needed, or maybe not
};

Shelter.prototype.dequeueAny = function(pet) {
  //Todo
};

Shelter.prototype.dequeueDog = function() {
  //Todo
};

Shelter.prototype.dequeueCat = function() {
  //Todo
};


var List = function() {
  this.head = null;
  this.tail = null;
};

List.prototype.addToTail = function(data) {
  
  var nextTail = {
    val: data,
    next: null
  };

  if (!this.head) {
    this.head = nextTail;
  }
  if (this.tail) {
    this.tail.next = nextTail;
  }
  this.tail = nextTail;
};

List.prototype.removeHead = function() {

  var ref = null;

  if (this.head) {
    ref = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
  }

  return ref;
};

module.exports = Shelter;