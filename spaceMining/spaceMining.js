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

var badNeighbors = function(neighbors) {
  //Todo: implement me!
  //Hint - this problem might be done recursively, or in linear time with Dynamic Programming techniques
};



module.exports = badNeighbors;
