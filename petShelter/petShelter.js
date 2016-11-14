// An animal shelter, which holds just cats and dogs, operates on a strictly 'first-in first out' basis. That is,
//potential adopters have no choice as to which pet they get. They can specify if they would like a dog or a cat,
//but that's it. Write the data structures and systems which will implement this system. You need methods enqueue, dequeueAny,
//dequeueDog, and dequeueCat.

//You can use the linkedList data structure provided below


var Shelter = function() {
  this._dogs = new List();
  this._cats = new List();
  this._count = 0;
};

Shelter.prototype.enqueue = function(pet, type) {

  this._count++;
  var data = {
    time: this._count,
    data: pet
  };

  if (type === 'cat') {
    this._cats.addToTail(data);
  } else {
    this._dogs.addToTail(data);
  }

};

Shelter.prototype.dequeueAny = function(pet) {
  //compare dates of the heads of both lists
  var result = null;

  if (!this._dogs.head && !this._cats.head) {
    return result;
  } else if (!this._dogs.head) {
    result = this._cats.removeHead();
    return result.val.data;
  } else if (!this._cats.head) {
    result = this._dogs.removeHead();
    return result.val.data;
  } else {
    if (this._dogs.head.val.time < this._cats.head.val.time) {
      var result = this._dogs.removeHead();
      return result.val.data;
    } else {
      var result = this._cats.removeHead();
      return result.val.data;
    }    
  }
};

Shelter.prototype.dequeueDog = function(pet) {
  var result = null;

  if (this._dogs.head) {
    result = this._dogs.removeHead();
  }

  return result ? result.val.data : result;
};

Shelter.prototype.dequeueCat = function(pet) {
  var result = null;

  if (this._cats.head) {
    result = this._cats.removeHead();
  }

  return result ? result.val.data : result;
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