// Given an input of two squares, return their overlapping areas
//Ex. input: [[1, 0], [1, 5], [3, 5], [3, 0]], [[2, 4], [2, 7], [7, 7], [7, 4]]

var findOverlap = function(rectangle1, rectangle2) {

  var lowest1 = findPos(rectangle1, 'lowerLeft');
  var lowest2 = findPos(rectangle2, 'lowerLeft');
  var result;
  
  //find which situation we are in:
  
  var lowerCorner =   lowest1[1] < lowest2[1] ? lowest1 : lowest2;
  var higherCorner =  lowest1[1] < lowest2[1] ? lowest2 : lowest1;
  
  var lower =   lowest1[1] < lowest2[1] ? rectangle1 : rectangle2;
  var higher =  lowest1[1] < lowest2[1] ? rectangle2 : rectangle1;
  
  
  
  //1. comparing upper right to lower left
  if (lowerCorner[0] < higherCorner[0]) {
      
      //compare lowers upper right to highers lower left
      var top = findPos(lower, 'upperRight');
      var bottom = higherCorner;
      
      if (bottom[0] >= top [0] || bottom[1] >= top[1]) {
          result = -1;
      } else {
          result = [top, bottom, [top[0], bottom[1]], [bottom[0], top[1]]];
      }
  } else {
  //2. comparing upper left to lower right
      //compare lowers upper right to highers lower left
      var top = findPos(lower, 'upperLeft');
      var bottom = findPos(higher, 'lowerRight');
      
      if (bottom[0] >= top [0] || top[1] >= bottom[1]) {
          result = -1;
      } else {
          result = [top, bottom, [top[0], bottom[1]], [bottom[0], top[1]]];
      }
  
        
  }

  
  return result;
    
};


var findPos = function(rectangle, direction) {

  var pos = rectangle[0];
  
  rectangle.forEach(coord => {
      if (positions[direction](coord, pos)) {
          pos = coord;
      }
  });
  
  return pos;
};

var positions = {
  lowerLeft: function(coord, pos) {
    return coord[0] < pos[0] && coord[1] < pos[1];
  },
  upperRight: function(coord, pos) {
    return coord[0] > pos[0] && coord[1] > lowest[1];
  },
  lowerRight: function(coord, pos) {
    return coord[0] > pos[0] && coord[1] < pos[1];
  },
  upperLeft: function(coord, pos) {
    return coord[0] < pos[0] && coord[1] > pos[1];
  }
};