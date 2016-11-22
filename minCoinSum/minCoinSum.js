/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
Can you figure out the mininum number of coins needed to make the given amount?
Note that a "greedy" approach is not guaranteed to work here. As in,
always taking away the largest coin amount will not always work out.

Ex: 99 - 50p -> 49 - 20p -> 29 - 20p -> 9 - 5p -> 4 - 2p -> 2 - 2p === 6 coins


example usage of `makeChange`:

*/
var options = [200, 100, 50, 20, 10, 5, 2, 1];

var makeChange = function(total, curr) {

  curr = curr || 0;
  if (curr === total) {
    return 1;
  } else if (curr > total) {
    return 0;
  } else {
    return options.reduce((sum, coin) => sum + makeChange(total, curr + coin), 0);
  }

};

console.log(makeChange(25));