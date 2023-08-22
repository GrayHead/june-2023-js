// const color = 'qwe';
//
// let message
// switch (color) {
//
//     case 'green':
//         message = 'go';
//         break;
//     case 'yellow':
//         message = 'wait';
//         break;
//     case 'red':
//         message = 'stop';
//         break;
//
//     default:
//         console.error('Invalid color type');
// }
//
// console.log(message.split(''))


// let user = {
//     name: "Maksym",
//     skills: ['js', 'nodejs', 'nestjs'],
// };
// console.log(user.skills);
//
//
// if (user.name === 'Maksym') {
//     console.log(user.name);
// } else {
//     console.log('noname');
// }
//
// let number = '0234'
// console.log(+number)

//
// let obj1 = {name: "Maksym"};
// let obj2 = {};
// console.log(!!NaN)
//
// const arr1 = ['js', 'nodejs', 'nestjs']
// const arr2 = []
//
// console.log(arr1.length, !!arr1.length);
// console.log(arr2.length, !!arr2.length);
//
//
// const x = 5
// const s = x ?? 'df'
//
// console.log(s)
//
// let num1 = +"5ff";
// console.log(isNaN(num1));
//
// const promptValue = 'rex';
// let rrr = prompt('Get some text') === 'rex' ? 100 : 200;
// console.log('result : ', rrr);

let user1 = {name: "user0", username: "userName0", password: 101647};
let user2 = {name: "user1", username: "userName1", password: 146851};
let user3 = {name: "user3", username: "userName1", password: 146851};

let users1 = [
    user1,
    user2,
    user3,
]

let users2 = [
    {name: "user0", username: "userName0", password: 101647, skills: 'dsf'},
    {name: "user1", username: "userName1", password: 146851, skills: 'dfgh'},
    {name: "user1", username: "userName1", password: 146851, skills: null},
];
console.log(users1)
console.log(users2[0].skills)
console.log(users2[1].password)
