/*
I have an array of words that are mostly alphabetical, except they 
start somewhere in the middle of the alphabet, reach the end, and 
then start from the beginning of the alphabet. In other words, this 
is an alphabetically ordered array that has been "rotated." Write a 
function that returns the index of the pivot, or null if there is 
no pivot (meaning the entire list of words is in alphabetical order). 

Example: ['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']  => will return a pivot index of 3 for 'apple'
*/

var findPivot = function(array, start, end) {

  // We will begin with a O(log n) approach, which will recursively divide the array in half until it finds the index of the pivot
  
  //Init recursive args
  start = start || 0;
  end = end || array.length - 1;
  
  //Find halfway between start and end
  var half = Math.floor((end - start) / 2) + start;
  
  //base case, we find that the new start 
  if (array[half - 1] > array[half]) {
    
    return half;

  //Other base case: we don't find a pivot
  } else if (start === end) {

    //When we take Math.floor we will always be skipping the last entry so we have to check that one
    if (start === array.length - 2) {

      return array[start] > array[start + 1] ?
              start + 1 :
              null;

    } else {

      return null;
    }

  } else {
    
    //Figure out which half of the array the pivot is in
    //this will be true if the pivot is in the left half
    left = array[start] >= array[half];

    return left ? 
        findPivot(array, start, half) :
        findPivot(array, half, end);
  }
  
};

module.exports = findPivot;