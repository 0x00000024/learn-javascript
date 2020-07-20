// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'hi';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'hi';

// Convert HTML Collection into array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function (li, index) {
    console.log(li.className);
    li.textContent = `${index}: Hello`;
});

console.log(lis);

// document.querySelectorAll
const item = document.querySelectorAll('ul.collection li.collection-item');
item.forEach(function (it, index) {
    it.textContent = `${index}: Hello`;
});

console.log(item);

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
    li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#bd8f8f';
}
