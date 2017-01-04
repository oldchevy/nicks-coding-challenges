# nicks-coding-challenges
My favorite coding challenges I've gathered from interview prep, if you find it useful and have more to add make a PR!


### How to use this repo

Work from the master branch and commit your progress there. To check your code against the test suite run the command `mocha filpath/problem.test.js` inside your terminal. Or run all tests with the `npm test` command. When you wan to check your solution against mine (which hopefully is optimal in run-time), check out the `solutions` branch.


###Setup

If you don't have mocha yet, you can get it with npm. I recommend installing globally with `npm install --global mocha` so you can use the CLI whenever you want in the future.

Additionally, some of the tests make use of the new ES6 Javascript language features. To be able to run these tests, use the node version manager, `nvm`, to get Node v6 or higher. To get Node v6, use `nvm install v6` then `nvm use v6`.

###Current Test Coverage (Nov. 6, 2016)

Please feel free to make a PR with test cases for these problems:

* rectangleOverlap
* quickSort

###Challenges

#####Async Memoize

(asynchronous) Create a mix-in that memoizes a functions results from previously called arguments. However, the function will always be asynchronous. This means if a memoized async function is called multiple times before a value has returned and been stored in the memo from the first call, you must figure out how to detect that and trigger all the callbacks once the memo has been created, in the original order they were passed to the memoized function.

#####Combine Parens

(recursive) For a given number of parens, output all the unique and valid combinations of open and closing paren sequences. This problem has several equally valid approaches.

##### Excel Columns
(recursive) Given a column number which begins with zero, find the appropriate Excel column header. This problem is an exercise in thinking about digits in base 26.

#####Find Pivot

(searching) You are given a sorted array of words, except it might have a pivot somewhere in it. Find the pivot and return its index, if it exists.

#####Paths to Sum

(trees) Given a binary tree, find the number of sequences of nodes that will sum to a target. Note that the sequence does not necessarily start on the root node. There IS an optimal solution where you only have to visit each node once, but it is very tricky.

#####Pet Shelter

(stacks and queues) An animal shelter operates on a strictly first in first out basis. The only choice adopters have is whether they would like a dog or a cat. Make a class that will behave in this way.

#####Quick Sort

(sorting) Implement quick sort. This sorting algorithm is often the best choice to use, given that the unsorted set is sufficiently out of order. It is similar to merge sort in that it utilizes a divide and conquer approach. The basic premise is that you pick an element to be the partition, and divide the array such that all smaller elements are on one side of the partition and all larger elements are on the other. Then you can recurse down each side until you achieve a fully sorted array. The trick is to perform the partition in linear time. There are many different partitioning schemes, see if you can come up with one on your own!

#####Rectangle Overlap

(logic / OOP) Read in the coordinates of two rectangles, and give back the rectangle describing their overlapping area, if one exists. This problem has a lot of logic, but can be streamlined depending on how you organize your data!

#####Rotate Matrix

(array & string manipulation) Given a square matrix of any size, do an in-place rotation 90 degrees in either direction. This one would be trivial without the O(1) space constraint.

#####Serialize BST

(trees) Write two methods for your binary search tree class. One that serializes your tree into a format which may be saved to a file. In other words a string. In the second deserialize the string you made and load up an exact copy of the BST in memory.

#####Space Mining

(dynamic programming) You are planning an asteroid mining route, and you need to find the route where you can collect the most resources from the asteroids. The only trick is, you can't visit consecutive asteroids.

#####Water Blocks

(array & string manipulation / logic) You have an array that represents peaks and valleys. Find out how much water can be filled in this 2D map without overflowing.

#####Weave Lists

(linked lists) Given two singly linked lists, do an in-place weave. Zipper them up so that you can do who knows what with it. Seriously I have no clue how this method might be used in real life programming. Anyways make it handle lists of different lengths. In a classic representation of linked lists, you do not have a size variable or a tail pointer like you might be used to.
