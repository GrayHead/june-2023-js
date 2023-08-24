const users1 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const users2 = [
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

// function aaa(array) {
//     if  (array.length) {
//         for (const item of array) {
//             console.log(item)
//         }
//     }
// }
// aaa(users1);
// aaa(users2);
// aaa([]);


// function foo(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
//
// foo(12,  true)


// function calc(a = 50, b = 20, c = 100) {
//     console.log(a + b + c);
// }
//
// calc()
//
// function foo2() {
//     const arr = Array.from(arguments);
//     let result = 0;
//
//     for (const number of arr) {
//         result = result + number;
//         console.log(1)
//     }
//
//     console.log('result in function : ', result)
//     return result;
// }
//
// const a = foo2(2, 4, 4, 6, 5, 7, 6, 8, 8, 45)
// // const b = foo2(2, 4, 4, 6)
// console.log(a)
// // console.log(b)


//
// function foo2() {
//     if (arguments.length > 3) {
//         return 'aaaaa';
//     } else {
//         return 'bbbbb'
//     }
// }
//
// const a = foo2('qwe', 'asd', 'zxc', 'ddfgdsfg');
// console.log(a);


// function foo(...rest) {
//     console.log(rest)
//     console.log(Array.from(arguments))
// }
//
// foo('aaaa', 'bbbbb', 'ccccc', 'ddddd', 'dfghj', 'ytr');


//todo loop with function

// function foo(...arr) {
//     let result = 0;
//
//     for (const number of arr) {
//         if (number > 45) {
//             break;
//         }
//         result = result + number;
//     }
//
//     console.log('result in function : ', result)
//     return result;
// }
//
// const a = foo(2, 4, 4, 6, 50, 7, 6, 8, 8, 45)
// console.log(a)

// function foo(...arr) {
//     let result = 0;
//
//     for (const number of arr) {
//         if (number > 45) {
//             continue;
//         }
//         result = result + number;
//     }
//
//     console.log('result in function : ', result)
//     return result;
// }
//
// const a = foo(2, 4, 4, 6, 50, 7, 6, 8, 8, 45)
// console.log(a)

function foo(...arr) {
    let result = 0;

    for (const number of arr) {
        if (number > 45) {
            return 'number too big';
        }
        result = result + number;
    }

    console.log('result in function : ', result)
    return result;
}

const a = foo(2, 4, 4, 6, 46, 7, 6, 8, 8, 45)
console.log(a)
