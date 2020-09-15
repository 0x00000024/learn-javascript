// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(typeof name2);

if (name1 === 'Jeff') {
    console.log('Yes');
} else {
    console.log('No');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return x + y');

// Object
const john1 = {'name': 'John'};
const john2 = new Object({name: "John"});
console.log(john2);

// Array
const arr1 = [1, 2, 3, 4];
const arr2 = Array(1, 2, 3, 4);

// Regular Expression
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
