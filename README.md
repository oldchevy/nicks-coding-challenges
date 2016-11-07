# nicks-coding-challenges
My favorite coding challenges I've gathered from interview prep, if you find it useful and have more to add make a PR!


### How to use this repo

Work from the master branch and commit your progress there. To check your code against the test suite run the command `mocha filpath/problem.test.js` inside your terminal. Or run all tests with the `npm test` command. When you wan to check your solution against mine (which hopefully is optimal in run-time), check out the `solutions` branch.


###Setup

If you don't have mocha yet, you can get it with npm. I recommend installing globally with `npm install --global mocha` so you can use the CLI whenever you want in the future.

Additionally, some of the tests make use of the new ES6 Javascript language features. To be able to run these tests, use the node version manager, `nvm`, to get Node v6 or higher. To get Node v6, use `nvm install v6` then `nvm use v6`.

##Current Test Coverage (Nov. 6, 2016)

Please feel free to make a PR with test cases for these problems:

* rectangleOverlap
* quickSort
