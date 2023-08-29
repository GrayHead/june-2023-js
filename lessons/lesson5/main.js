const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

// aaa(users)
function aaa(array) {
    if (array.length) {
        for (const item of array) {
            console.log(item)
        }
    }
}

// aaa(users);

// foo1(users);

const sss = function (array) {
    console.log(arguments)
    if (array.length) {
        for (const item of array) {
            console.log(item)
        }
    }
}
// sss(users);

const foo1 = (array) => {
    if (array.length) {
        for (const item of array) {
            console.log(item)
        }
    }
}
// foo1([]);

// (function (array) {
//     if (array.length) {
//         for (const item of array) {
//             console.log(item)
//         }
//     }
// })(users)

// ((array) => {
//     if (array.length) {
//         for (const item of array) {
//             console.log(item)
//         }
//     }
// })(users)

const foo3 = (num1, num2) => {
    const pi = Math.PI
    return num1 + num2 * pi;
}
console.log(foo3(1, 3));
console.log(foo3(4, 3));
console.log(foo3(5, 3));

const foo4 = (num1, num2) => num1 + num2
console.log(foo4(3, 5))


const foo5 = (arr, cb) => {
    const newArr = [];
    for (const user of arr) {
        if (cb(user)) {
            newArr.push(user);
        }
    }
    return newArr;
}
const conditionFoo1 = (user) => {
    return user.age > 30
}
const conditionFoo2 = (user) => {
    return user.name.length > 4
}

const result1 = foo5(users, conditionFoo1)
console.log(result1);
const result2 = foo5(users, conditionFoo2)
console.log(result2);

const user = {
    id: 1,
    name: 'max',
    age: 31,
    sayHello1: (name) => {
        console.log(`HELLO!! ${name}`)
    },
    sayHello2: function (name) {
        console.log(`HELLO!! ${name}`)
        return 2;
    }
}

user.sayHello1('Artem');
console.log(user.sayHello2('Dima'));


const user2 = {
    id: 1,
    name: 'max',
    age: 31,
    sayHello1: function (name) {
        console.log(`HELLO!! ${name}, ${this.name}`)
    },
}

user2.sayHello1('Artem');

