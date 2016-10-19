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


// Solution with log time complexity 
var findPivot = function(arr, start, end) {
  start = start || 0;
  end = end || arr.length - 1; 
  var middle = Math.ceil((start + end) / 2);
  if (arr[start] < arr[middle]) { // Check if this section (start -> mid, the LEFT half) is sorted
    // This section is sorted
    // Is there another section of the array remaining to check? (it would be the RIGHT half)
    if (end === middle) { // nothing left, we didn't find the pivot
      return null;
    } else { // something left, check the RIGHT half
      return findPivot(arr, middle, end);
    }
  } else {
    // This section is NOT sorted, so the pivot is in this section (start -> mid)
    if (middle - start === 1) { // if start and mid are immediately next to each other, we found pivot
      return middle;  
    } else { // otherwise, we should continue our search on this section of the array
      return findPivot(arr, start, middle); 
    }
  }
};

//can be refactored into 
var findPivot = function(arr, start, end) {
  start = start || 0;
  end = end || arr.length - 1; 
  var middle = Math.ceil((start + end) / 2);
  if (end === middle) {
    // We've combined our two stop cases. 
    // Since we're always checking the LEFT half first, 
    // if the middle === end, it means we've finished our search
    // Does this small section contain the pivot? if not, we didn't find one
    // if yes, the pivot index is end/middle
    return arr[start] < arr[end] ? null : middle;
  }
  if (arr[start] < arr[middle]) {
    return findPivot(arr, middle, end);
  } else {
    return findPivot(arr, start, middle);
  }
};