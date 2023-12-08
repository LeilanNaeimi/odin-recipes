'use strict';

const fruits = ['Apple', 'kiwi', 'lemon'];
const arr = ['a', 'b', 'c', 'd', 'e'];
const person = ['John', 'Doe', 46];
const points = [404, 100, 1341, 332, 2521, 10];
const numbers = [42, 3, 4, 9, 16, 11, 25];
const numbers1 = [[42, 3], [[1, 2]], 4, [9, 16], 11, 25];
const myObject = { name: 'John', age: 25, city: 'New York' };
/*  */
// const nestedArray = [1, [2, [3, [4]]]];
// const flatArray = nestedArray.flat(3);
// document.getElementById('text1').innerHTML = flatArray;
// console.log(flatArray);

/******* */
// const a = 'aaaaa vvvvv ddddd';
// console.log(a.split(' '));
//NOTE: Keys()
/*The Array.keys() method returns an Array Iterator object with the keys of an array.*/
// const keys = fruits.keys();
// let txt = '';
// for (let x of keys) {
//   txt += x + '</br>';
// }
// document.getElementById('text1').innerHTML = txt;

//SOLUTION2:

//NOTE:Array.from()
/*The Array.from() method returns an Array object from any object with a length property or any iterable object.*/
// const mystr = 'ABCDEF';
// const myArr = Array.from(mystr);
// document.getElementById('text1').innerHTML = myArr;
// document.getElementById('text2').innerHTML = typeof myArr;
// document.getElementById('demo1').innerHTML = typeof mystr;

//NOTE: odd and even
// let odd = '',
//   even = '';
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   if (numbers[i] % 2 !== 0) {
//     odd += numbers[i] + ',';
//   } else {
//     even += numbers[i] + ',';
//   }
// }
// document.getElementById('text1').innerHTML = 'odd numbers are: ' + odd;
// document.getElementById('text2').innerHTML = 'even numbers are: ' + even;

// way 2
// const isEven = number => number % 2 === 0;
// const isOdd = number => number % 2 !== 0;
// const evenNumbers = numbers.filter(isEven);
// const oddNumbers = numbers.filter(isOdd);
// document.getElementById('text1').innerHTML = 'even numbers are: ' + evenNumbers;
// document.getElementById('text2').innerHTML = 'odd numbers are: ' + oddNumbers;
//NOTE: find()
/* The find() method returns the value of the first array element that passes a test function.
 */

//NOTE: indexOf()
/* The indexOf() method searches an array for an element value and returns its position.
 Array.indexOf() returns -1 if the item is not found.
 array.indexOf(item, start)
 start	Optional. Where to start the search.Negative values will start at the given position counting from the end, and search to the end.
 */

// const apple = fruits.indexOf('Apple') + 1;
// document.getElementById('text1').innerHTML =
//   'Apple is found in position ' + apple;

//NOTE: some()
/* The some() method checks if some array values pass a test. */

// const str = points.some(mySome);
// if (str) document.getElementById('text1').innerHTML = str;

// function mySome(val) {
//   return val % 2 === 0;
// }

//NOTE: every()
/* The every() method checks if all array values pass a test.It returns a boolean value */

// const even = points.every(a => a % 2 === 0);
// if (even) {
//   document.getElementById('text1').innerHTML = even;
// } else {
//   document.getElementById('text2').innerHTML = even;
// }

//NOTE: reduce()
/*  The reduce() method runs a function on each array element to produce (reduce it to) a single value.  */
/* The reduce() method does not reduce the original array.*/
/* The reduce() method can accept an initial value */

// const sum = numbers.reduce(mySum);
// document.getElementById('text1').innerHTML = 'The sum is ' + sum;

// function mySum(a, b) {
//   return a + b;
// }

//NOTE: filter()
/* The filter() method creates a new array with array elements that pass a test.   */

// const test = numbers.filter(a => a < 20);
// document.getElementById('text1').innerHTML = test;

//NOTE: flatMap()
/*The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.*/
// const value = points.flatMap(myFlatFunc);
// document.getElementById('text1').innerHTML = value;

// function myFlatFunc(val) {
//   return val * 2;
// }

//NOTE: map()

// const text = person.map(a => a + 'D');
// document.getElementById('text1').innerHTML = text;

/* The forEach() method calls a function (a callback function) once for each array element. */
//NOTE: forEach()

// let text1 = '';
// fruits.forEach(myFunc);
// document.getElementById('demo1').innerHTML = text1;
// document.getElementById('demo2').innerHTML = fruits;

// function myFunc(val) {
//   text1 += val + '<br>';
// }
