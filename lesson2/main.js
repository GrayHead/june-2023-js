// let bands = [
//     "pink floyd", // 0
//     "acdc", // 1
//     "shinedown", // 2
//     "steve vai" // 3
// ];
// console.log(bands);
// console.log(bands[0]);
// // length = lastindex+1
// console.log(bands.length);
// // last index = length - 1
//
//
// console.log(bands[bands.length - 1]);
// // 4 3
// bands[4] = 'joe satriani';
// console.log(bands);
// bands.push("deep purple");
// console.log(bands);
// // size 6 index 5
//
// // bands[bands.length] = '?????';
// console.log(bands[bands.length - 1]);
//
// bands[1] = null;
// console.log(bands);


// let musicFolder = [
// //     0 0       01   02  03          04
// //                                        040           041        042
//     ['queen', 'acdc', 'pf', 'dp', ['my death valintine', 'xxxxxx', 'yyyyyy']], // 0
// //      10       11         12
//     ['eminem', '2pac', 'public enemy'], // 1
// //     20     21   22
//     ['awd', 'qwe', 'zxc'], // 2
// ]
//
//
// console.log(musicFolder.length);
// console.log(musicFolder[0][3]);
// console.log(musicFolder[0]);
// console.log(musicFolder[0][4]);
// console.log(musicFolder[0][4][0]);
// musicFolder[0][4].push("pppp");
// console.log(musicFolder[0][4]);


// let user = {
//     id: 1,
//     name: 'vasya',
//     age: 34,
//     status: true
// };
//
// console.log(user);
// console.log(user.id);
// console.log(user["age"]);
//
// // let user0 = {id: 1, name: 'vasya', age: 12, status: false};
// // let user1 = {id: 2, name: 'petya', age: 142, status: true};
// // let users = [
// //     user0,
// //     user1,
// //     {id: 3, name: 'anna', age: 65, status: false},
// //     {id: 35, name: 'max', age: 34, status: true},
// //     {id: 10050, name: 'olya', age: 32, status: true},
// //     {id: 4356, name: 'hrystia', age: 876, status: false},
// //     {}
// // ];
// //
// // console.log(users);
// // console.log(users[5])
// // let hrys = users[5];
// // console.log(hrys.age)
// // console.log(users[6]);
// // console.log(users[6].name)
//
// console.log(user);
//
// // user.skills = ['js', 'html', 'java'];
// user['skills'] = ['js', 'html', 'java'];
// console.log(user);
// console.log(user.skills[2]);
//
// user.skills.push('html');
// console.log(user)
//
// user.wife = {
//     name: 'olya',
//     age: 23
// };
// console.log(user);
//
//
// console.log(user.wife.name);


// number string boolean - primitives

// let p = 0;
// let pCopy = p;
// pCopy = 1;
//
// console.log(p);
// console.log(pCopy);


// let origin = {};
//
// let clone = origin;
//
// clone.id = 100500;
// console.log(clone);
// console.log(origin);
//
//
// let arr = [
//     [],
//     [],
//     []
// ];
// let arrElementindex1 = arr[1];
//
// arrElementindex1.push("asd");
// arrElementindex1.push("qwe");
// arrElementindex1.push("zxc");
// console.log(arr);


// let bool = confirm('????');
// if (bool) {
//     console.log('hello');
// } else {
//     console.log('goodbye');
//
// }


// let age = +prompt('enter your age');
// if (age > 18) {
//     console.log('adult');
// } else {
//     console.log('cartoon');
// }


// let color = prompt("which color you see?");

// let isRoadClear = confirm('road is clear?');
//
// // && AND
// // || OR
// if (color === 'green' || isRoadClear) {
//     console.log('go');
// } else if (color === 'yellow') {
//     console.log('wiat');
// } else if (color === 'red') {
//     console.log('stop')
// } else {
//     console.log('??????');
// }

// switch (color) {
//
//     case 'green':
//         console.log('go');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//
//     case 'red':
//         console.log('stop');
//         break;
//
//     default:
//         console.log('?????');
//
// }


// let user = {};
// if (user.name) {
//     console.log(user.name);
// } else {
//     console.log('noname');
// }


// let x;
//
// if (true) {
//     x = 100;
// }else {
//     x = 200;
// }
//
// console.log(x);

// let x = 5 > 6 ? 100 : 200;


let name = prompt('name?') || 'john doe';
console.log(name);
// if (!name) {
//     name = 'jojhn doe';
// }
// console.log(name);






















