/* jshint esversion: 6 */

/* Implement the function asyncMemoize:
 *
 * asyncMemoize takes an asynchronous function and returns a memoized version of it.  When the
 * memoized async function is invoked with new arguments, it performs asynchronous work on the
 * arguments, caches the result, and then invokes the given callback on the cached result.  When the
 * memoized function receives previously evaluated arguments, it invokes the given callback on the
 * cached result instead of making another asynchronous call.
 *
 * If the same arguments are passed to the function with a different callback, the callback should
 * be invoked on the cached results instead of performing an additional asynchronous call.
 *
 * fakeAsyncFunc( 10, result => result + 20 ); // makes asynchronous call on new argument
 * fakeAsyncFunc( 10, result => result + 30 ); // invokes callback on previously cached value
 *
 */

const asyncMemoize = func => {
  // Your crappy code here
};



module.exports = asyncMemoize;
