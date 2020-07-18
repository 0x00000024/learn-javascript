// FUNCTION DECLARATIONS

function greet(firstName = 'Ethan', lastName = 'Yu') {
    // if (typeof firstName === 'undefined') {
    //     firstName = 'Ethan'
    // }
    // if (typeof lastName === 'undefined') {
    //     lastName = 'Yu'
    // }
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

// FUNCTION EXPRESSIONS

const square = function (x = 3) {
    return x * x;
};

console.log(square(4));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function () {
    console.log('RUN IIFE');
})();

(function (name = 'Ethan') {
    console.log('Hello ' + name);
})('Ann');

// PROPERTY METHODS
const todo = {
    add: function () {
        console.log('Add todo..')
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);
    }
};

todo.delete = function() {
    console.log('Delete todo...');
}

todo.add();
todo.edit(11);
todo.delete();
