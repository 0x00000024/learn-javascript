// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-iteml';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Append li as child to ul

console.log(li);
