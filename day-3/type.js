// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 *
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
  // YOUR CODE BELOW HERE //
return Array.isArray(value); // value

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 *
 * HINT: look up how to figure out if something is an instance of the Date object.
 *
 * isObject({ a: 1, b: 2 }); // true
 * isObject([1, 2, 3]); // false
 * 
 */
function isObject(value) {
  // YOUR CODE BELOW HERE //
  // create if statement
  if (value === null){
  // return false
  return false;
  // else if statement
} else if (value instanceof Date) {
  // return false
  return false;
  // else if statement
} else  if ( Array.isArray(value)){
  // return
return false;
// else if statement || } else if (type of === value){
} else if (typeof value === 'object'){
  // return true
//} else {
  return true;
} else {

  return false;
}
}
  // YOUR CODE ABOVE HERE //


/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {

  // YOUR CODE BELOW HERE //
//**if (value === null){
  if ( Array.isArray(value) ) {

    typeof value === 'object' && value !== null && (date condition)
    // instance of date or is not
    return






    typeof value === 'object' && value !== null  &&  isnot date
    //typeof value === 'object' && value !== null && || array.isarray(value instanceof Date) {

  return true;
   //** */ return true;
    // else if statement
  //} else  if ( Array.isArray(value)) || typeof value === 'object' {
 // *} else  if ( Array.isArray(value)) {
    // return
   //?return true;
  // else if statement || } else if (type of === value){
  // *} else if (typeof value === 'object') {
    // return true
  //} else {
   //*return true;
  } else {

   return false;
  }

  // YOUR CODE ABOVE HERE //
}
/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 *
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
  // YOUR CODE BELOW HERE //
  // create if statement
  if (value === null) {
    // return null
    return "null";
  }
  // if statement
  if (Array.isArray(value)){
    // return array
  return "array";
  }
  // create if statement
  if (value instanceof Date) {
    // return date
    return "date";
  }
  // return  typeof value
  return typeof value;

  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.isArray = isArray;
  module.exports.isObject = isObject;
  module.exports.isCollection = isCollection;
  module.exports.typeOf = typeOf;
}
