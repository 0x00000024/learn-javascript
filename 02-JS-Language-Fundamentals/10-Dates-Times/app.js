let val;

const today = new Date();
const birthday = new Date('9-10-1987 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

val = birthday;

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1990);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(55);


console.log(birthday);
console.log(typeof birthday);
