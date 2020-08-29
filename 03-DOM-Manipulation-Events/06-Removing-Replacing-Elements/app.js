// Replace Element

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Remove Element
const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');
//TODO

console.log(newHeading);
