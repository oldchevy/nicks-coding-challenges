/*
Water Blocks

You are given an input array where each element represents the height of a line of towers. 

The width of every tower is 1.
It starts raining. How much water is collected between the towers? 
Eg. Input: [5, 2, 3, 2, 1, 3]
Output: 4
Visualization:

'-' is water
 '#' is a block

#
#
# - # -  - #
# # # # - #
# # # # # #

*/

var waterBlocks = function (blocks) {
  // TODO: Implement
  
  //I want to try building up aread where water can go
  
  var tempBegin = {
    location: 0,
    height: blocks[0]
  };
  
  var tempEnd = {
    location: 1,
    height: blocks[1]
  };

  var ranges = [];
  var result = 0;
  
  blocks.forEach((height, index) => {
    
    //Two options at each place, a height is less or greater than our temp begin
    if (height > tempBegin.height) {
      
      //if we get a new highest thing, push the range into our valid places
      ranges.push({
        start: tempBegin.location,
        end: index,
        maxHeight: tempBegin.height
      });
      
      //reassign tempBegin
      tempBegin.location = index;
      tempBegin.height = height;
      
      
    } else {
      
      //reassign tempEnd as needed
      if (height >= tempEnd.height) {
        
        //if we get here, we know we need to push the range and also reset both temps
        ranges.push({
          start: tempBegin.location,
          end: index,
          maxHeight: height
        });
        
        tempEnd.location = index;
        tempEnd.height = height;
        tempBegin.location = index;
        tempBegin.height = height;

      }
      
      //assign a final range at to the end of the array
      if (index === blocks.length - 1) {
        ranges.push({
          start: tempBegin.location,
          end: index,
          maxHeight: height
        });
      }
    }
  });
  
  console.log(ranges);
  ranges.forEach(range => {
    for (var i = range.start; i <= range.end; i++) {
      if (blocks[i] < range.maxHeight) {
        result += (range.maxHeight - blocks[i]);
      }
    }
  });
  
  return result;
};

module.exports = waterBlocks;

waterBlocks([5, 2, 3, 2, 1, 3]);