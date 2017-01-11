/*

Given two words (start and end), and a dictionary, find the length of shortest transformation sequence from start to end, such that:

You must change exactly one character in every transformation
Each intermediate word must exist in the dictionary.

Key point: all words in the dict will be the same length, as will all the two words given as start and end

*/



//This Queue helper class attempts to get around the extra space required
//by using object literals in a linked list while preventing O(N) operations when
//unshifting from an array

//At scale, eventually you would want to do some memory management to reset the storage array and pointers

var Queue = function() {
  this._storage = [];
  this._pointer = 0;
  this._size = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage.push(value);
  this._size++;
};

Queue.prototype.dequeue = function() {
  var result = this._storage[this._pointer];
  this._pointer++;
  this._size--;
  return result;
};

Queue.prototype.size = function() {
  return this._size;
};


//This is the main function

var wordLadder = function(start, end, dict) {
  //dict is a hash table 
  //start and end are strings
  var Q = new Queue();
  var seen = {};
  var working, oneAway;
  dict[end] = true;

  Q.enqueue({word: start, path: 1});

  while (Q.size() > 0) {

    working = Q.dequeue();
    oneAway = findClosest(working.word, dict);
    
    for (var i = 0; i < oneAway.length; i++) {
      
      //we've found our target word
      if (oneAway[i] === end) {
        delete dict[end];
        return working.path + 1;

      //gotta keep looking
      } else {

        //make sure not to revisit words we've already travelled down
        if (!seen[oneAway[i]]) {
          //toggle it into seen
          seen[oneAway[i]] = true;
          //add the word to the Queue
          Q.enqueue({word: oneAway[i], path: working.path + 1});
        } 
      }
    }
  }

  return 'No path from ' + start + ' to ' + end;

};

var findClosest = function(word1, dict) {
  //our strategy for now is to enumerate the entire dictionary
  //depending on the size of the dictionary, it might be better to cycle through
  //all possible character changes in the word. Although this costs 26^n operations min

  //at scale this could be an adaptive consideration

  var result = []; //will store all words one away

  Object.keys(dict).forEach(word2 => {
    if (wordChecker(word1, word2)) {
      result.push(word2);
    }
  });

  return result;

};

var wordChecker = function(word1, word2) {
  
  var diff = 0;
  var longer = word1.length > word2.length ? word1 : word2;
  var shorter = word1.length > word2.length ? word2 : word1;

  for (var i = 0; i < longer.length; i++) {
    if (longer[i] !== shorter[i]) {
      diff++;
      if (diff > 1) {
        return false;
      }
    }
  }

  return diff === 1 ? true : false;
};

module.exports = wordLadder;