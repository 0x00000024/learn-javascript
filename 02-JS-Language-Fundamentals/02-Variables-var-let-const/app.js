//
// Variables - var, let & const
//
var name = 'Ethan';
console.log(name);
name = 'Iris';
console.log(name);

// Init var
// var greeting;
// console.log(greeting);
greeting = 'hello';
console.log(greeting);

// letters, numbers, _, $
// Can not start with number
var _name = 'John';

// Multi word vars
var firstName = 'Ethan'; // Camel case
var first_name = 'Ethan'; // Underscore
var FirstName = 'Ethan'; // Pascal case
console.clear();

// Let
let name_let;
name_let = 'Ethan Yu';
console.log(name_let);
name_let = 'Iris Cai';
console.log(name_let);
console.clear();

// CONST
const name_const = 'Ethan';
console.log(name_const);
// Can not reassign
// Have to assign a value
// const greeting;

const person = {
    name: 'Ethan',
    age: 23
};
console.log(person);

person.name = 'Iris';
person.age = 26;
console.log(person)

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);
