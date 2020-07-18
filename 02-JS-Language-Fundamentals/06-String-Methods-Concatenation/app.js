const firstName = 'Ethan';
const lastName = 'Yu';
const age = 23;
const str = 'Hello there my name is Ethan Yu';
const tags = 'web design,web development,programming';

let val;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Ethan ';
val += 'Yu';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('t');
val = firstName.lastIndexOf('t');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// Get last char
val = firstName.substring(0, 2);

// Slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Ethan', 'Jack');

// includes()
val = str.includes('foo');

console.log(val);
