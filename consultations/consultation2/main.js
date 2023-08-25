function foo(...sss) {
    return sss;
}

const a = foo(2, 4, 'asfsdfs', 'sdfs', true)
console.log(a)


const arr = [2, 4, 'asfsdfs', 'sdfs', true];

foo(arr, 0, 3)

const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    true,
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

// for (const item of users) {
//     console.log(item)
// }

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

let sdf = 2;

console.log(sdf.toString());

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
