// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
document.getElementById('task-title').style.background = '#d98e8e';
document.getElementById('task-title').style.color = '#2e6bc7';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color: red">Task List</span>';

// document.querySelector()
