//Implement an algorithm to print all valid combinations of n pairs of parenthesis
//Note: try to use Dynamic Programming principles

//Eg: input = 3, output = ['((()))', '(()())', '(())()', '()(())', '()()()']

var combineParens = function(n, stack, buildup, combis) {

  //i'm going to initialize by putting in one opening paren and putting it on the stack
  var stack = stack === undefined ? 1 : stack;
  var combis = combis || [];
  var buildup = buildup || '(';

  //base case, we've generated a full combination
  if (buildup.length === n * 2) {
    stack === 0 ? combis.push(buildup) : null;
    return;
  } 

  //there are two choices, close and decrement the stack, or open and increment the stack
  //if the stack is < n, we can try both paths
  //if the stack is full, we can only toggle off
  //always try toggling on before off
  if (stack === n) {
    combineParens(n, stack - 1, buildup + ')', combis);
  } else {
    combineParens(n, stack + 1, buildup + '(', combis);
    if (stack > 0) {
      combineParens(n, stack - 1, buildup + ')', combis);
    }
  }



  return combis;
};

module.exports = combineParens;


