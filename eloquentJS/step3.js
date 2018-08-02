

/**
 * Number and silly results
 */
console.log("5" - 1); // → 4
console.log("5" + 1); // → 51
console.log("five" * 2); // → NaN

console.log(8 * null); // it will be ZERO
console.log(8+null);//8

/**
 * Comparisons and internals 
 */
console.log(false == null); //false
console.log(false == undefined); // false
console.log(false == 0) // true
console.log(false === 0); // false

console.log("3" == 3); // true
console.log("3" === 3); // false

console.log(null == undefined); // → true
console.log(null === undefined); // → false
console.log(null == null); // true