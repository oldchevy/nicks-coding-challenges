/*spaceMining
 
A spaceship is mining precious metals from asteroids in a circular route.
On any given asteroid, the ship can collect the specified amount resources on the asteroid, 
however then the ship cannot land at the next asteroid because the amount of fuel it takes
to land/depart an asteroid is the same as the energy required to process the resources just harvested,
and you have just enough fuel to make N stops or fuel processings. In other words, you can make at max
N / 2 stops.

That is, if the ship lands on a certain asteroid it will never be able to stop at the very next one.
Your job is to tell the pilot the maximum amount of resources he can collect in any given trip around the loop.
Since the mining spaceship will be making this route continuously, remember that the first and last stops count
as neighboring. That is, if the ship stops at the last asteroid, it can never stop at the first.

Ex: [10, 3, 2, 5, 7, 8] --> 19, which was taken from 10, 2, and 7
*/

var spaceMining = function(neighbors) {

  //Defining the beginning of the recurrence relation
  var DParray = new Array(neighbors.length);
  DParray[0] = neighbors[0];
  DParray[1] = Math.max(neighbors[1], neighbors[0]);

  //Defining the variables we will use to track whether the first 
  //entry has been taken or not
  var alternating = DParray[0] !== DParray[1];
  var firstTaken = DParray[0] === DParray[1];

  for (var i = 2; i < neighbors.length; i++) {

    //Our recurrence relation
    DParray[i] = Math.max(DParray[i - 2] + neighbors[i], DParray[i - 1]);

    //This is to keep track of whether the first element was taken
    if (alternating) {
      alternating = DParray[i] > DParray[i - 1];
      firstTaken = alternating ? !firstTaken : firstTaken; // <--- need to keep the bool the same if we are breaking, else flip it
    } 

    //For the last entry, we have to alter our recurrence relation slightly
    //but only if the first entry was taken
    //in that case we check whether it would be better to take the last or first
    //AKA, subtract out the first and see which entry is bigger
    if (i === neighbors.length - 1 && firstTaken) {
      DParray[i] = Math.max(DParray[i - 1], DParray[i] - neighbors[0]);
    }
  
  }

  return DParray[DParray.length - 1];
};



module.exports = spaceMining;
