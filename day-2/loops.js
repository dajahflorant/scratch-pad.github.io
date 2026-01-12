// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
for (let i = 0; i < array.length; i++) {
  //print to console
  console.log(array[i]);
}

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // create loop
for (let i = array.length - 1; i >= 0; i--) {
  // print to console
  console.log(array[i]);
}

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // return array 
return Object.keys(object);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //loop ovr obj
for (const key in object) {
  // print to console
  console.log(key); 
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // return
return Object.values(object);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
// create loop
for (const key in object) { 
  // print to the console
  console.log(object[key]);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // return num
return Object.keys(object).length;

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  const keys = Object.keys(object);
  // reverse key
  keys.reverse();
  // initiate loop
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    // print values  to console
    console.log(object[key]);
  }
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;

}
