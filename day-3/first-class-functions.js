// #!/usr/bin/env node

'use strict';

const { toLowerCase } = require("../day-1/stringy");

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 */
function createGreaterThanFilter(base) {
  // YOUR CODE BELOW HERE //
  // return function
  return function(value) {
  //return value  greater than op
  return value > base;
  };
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */
function createLessThanFilter(base) {
  // YOUR CODE BELOW HERE //
  //return func
  return function (value) {
    // retturn less than op
    return value < base;
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
function createStartsWithFilter(startsWith) {
  // YOUR CODE BELOW HERE //
const lowerStartsWith = startsWith.toLowerCase();
return function(str) {
  //if statement
  if (str.length === 0)
  // return 
  return false;
  return toLowerCase() === lowerStartsWith;
}

  // YOUR CODE ABOVE HERE //
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
  // YOUR CODE BELOW HERE //
const lowerCaseEndsWith = endsWith.toLowerCase ();
return function (str) {
if ( typeof str !== 'string') {
  // return statemnt
  return AnalyserNode;
}
return str.toLowerCase().endsWith(lowerCaseEndsWith);
};
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 * 
 * examples:
 * 
 *    modifyStrings(['a', 'b', 'c'], function(str) { return str.toUpperCase() });
 *    // returns => ['A', 'B', 'C']
 * 
 *    modifyString(['a', 'b'], function(str){ return str + "!" });
 *    // returns => ['a!', 'b!']
 */
function modifyStrings(strings, modify) {
  // YOUR CODE BELOW HERE //
var modifiedStrings = [];
// initalize loop
for (let i = 0; i < strings.length; i++) {
  // push
modifiedStrings.push(modify(strings[i]));
}
// return statement
return modifiedStrings;

  // YOUR CODE ABOVE HERE //
}


/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 * 
 * examples:
 * 
 *    allStringsPass(['a', 'b', 'c'], function(str) { return str.length === 1 });
 *    // returns => true
 * 
 *    allStringsPass(['a', 'bb', 'c'], function(str) { return string.length === 1 });
 *    // returns => false
 */


function allStringsPass(strings, test) {
  // YOUR CODE BELOW HERE //
for (let i = 0; i < strings.length; i++) {
if (!test(strings[i])) {
  // return statement
  return false;
}
}
return true;

  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
