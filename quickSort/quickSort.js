//quicksort =>
//Quicksort is in many times the most optimal sorting algorithm to use! Therefore it's relevant to implement it for yourself
//quicksort is on average O(NlogN) in time complexity, but at times can degrade to O(N^2).

//The basic overview is that at each step you pick an index to start partitioning
//On that index, you switch array values in linear time such that: 
  //all lower elements are left of the partition
  //all higher elements are right of the partition

//Once you have that figured out, recurse down each partition where you pick a new partition index


var quickSort = function(arr, start, end) {

  start = start || 0;
  end = end || end === 0 ? end : arr.length - 1;

  if (start < end) {
    var pivot = partition(arr, start, end);
    console.log(arr, start, end, pivot);

    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
  }

  return arr;
};


var partition = function(arr, start, end) {

  var pivot = arr[start];
  var high = end;

  for (var i = end; i > start; i--) {
    if (arr[i] >= pivot) {
      swap(arr, i, high);
      high--;
    }
  }
  swap(arr, start, high);
  console.log(arr, high);
  return high;


};

var swap = function(arr, i, j) {
  var copy = arr[i];
  arr[i] = arr[j];
  arr[j] = copy;
};

console.log(quickSort([4, 7, 1, 9, 4, 2, 6, 10]));
// console.log(partition([4, 7, 1, 9, 4, 2, 6, 10], 0, 7));