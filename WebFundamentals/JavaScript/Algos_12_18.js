// Array: Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new
// array containing the first array’s elements, followed by the second array’s elements. Do not alter the
// original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

let arr = [1,2,3]
let arr2 = [4,5,6]

Array.prototype.push.apply(arr, arr2)
console.log(arr)

v/*ar array1 = [1,2,3];
var array2 = [4,5,6];
var array3 = array1.concat(array2);

console.log(array3);*/

// Array: Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any
// elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5],
// change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

var arr = [4,2,1,3,5];
var minimum = [1]

function minfront() {
    
}


// BONUS:
// Array: Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method
// that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a
// given array’s values. Work in-place, naturally. Do you need to return anything from your function?
