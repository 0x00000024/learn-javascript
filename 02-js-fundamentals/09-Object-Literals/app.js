const person = {
    firstName: 'Ethan',
    lastName: 'Yu',
    age: 23,
    email: 'ethan@example.com',
    hobbies: ['music', 'movies'],
    address: {
        city: 'New York City',
        state: 'NY',
    },
    getBirthYear: function () {
        return 1996;
    }
};

let val;

val = person;

// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 40}
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
};
