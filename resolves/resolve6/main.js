// - Знайти та вивести довижину настипних стрінгових значень
const string1 = 'hello world';
const string2 = 'lorem ipsum';
const string3 = 'javascript is cool';
console.log(string1.length);
console.log(string2.length);
console.log(string3.length);

// - Перевести до великого регістру наступні стрінгові значення
const arr1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
const result = arr1.map((str) => str.toUpperCase());
console.log(result);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const arr2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
const result2 = arr2.map((str) => str.toLowerCase());
console.log(result2);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = '    dirty      string   ';
console.log(str.trim());
const result3 = str.split(' ').filter((c) => c.length).join(' % ');
console.log(result3);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні';
const stringToarray = (str) => str.split(' ');
console.log(stringToarray(str2));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const arrOfNums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const result4 = arrOfNums.map((num) => num.toString());
console.log(result4);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
const sortNums = (nums, direction) => {
    switch (direction) {
        case 'ascending':
            nums = nums.sort((a, b) => a - b);
            break;
        case 'descending':
            nums = nums.sort((a, b) => b - a);
            break;
        default:
            console.error('wrong direction type!!')
    }
    return nums;
}
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const sortedArr = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortedArr);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filteredArr = coursesAndDurationArray.filter((c) => c.monthDuration > 5);
// const filteredArr = coursesAndDurationArray.filter(({ monthDuration }) => monthDuration > 5);
console.log(filteredArr);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mappedArr = coursesAndDurationArray.map((value, index) => {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration,
    }
});
console.log(mappedArr);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
]
// - знайти піковий туз
const ace = cards.find((card) => card.value === 'ace' && card.cardSuit === 'spade');
console.log(ace);

// - всі шістки
const s6 = cards.filter((card) => card.value === '6');
console.log(s6);

// - всі червоні карти
const redCards = cards.filter((card) => card.color === 'red');
console.log(redCards);

// - всі буби
const diamonds = cards.filter((card) => card.cardSuit === 'diamond');
console.log(diamonds);

// - всі трефи від 9 та більше
const eee = cards.filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value));
console.log(eee);


const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];


let cardsDesc = []
for (const suit of cardSuits) {
    const redSuits = ['diamond', 'heart'];
    const blackSuits = ['spade', 'clubs'];

    let color = '';
    if (redSuits.includes(suit)) color = 'red';
    if (blackSuits.includes(suit)) color = 'black';

    for (const value of values) {
        cardsDesc.push({suit, value, color});
    }
}
console.log(cardsDesc);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// const cards4 = cards.reduce((acc, cur) => {
//     acc[cur.cardSuit].push(cur);
//     return acc;
// }, {spade: [], clubs: [], heart: [], diamond: []});
//
// console.log(cards4);

const cards4 = cards.reduce((acc, cur) => {
    switch (cur.cardSuit) {
        case 'spade':
            acc.spades.push(cur);
            break;
        case 'clubs':
            acc.clubs.push(cur);
            break;
        case 'heart':
            acc.hearts.push(cur);
            break;
        case 'diamond':
            acc.diamonds.push(cur);
            break;
    }
    return acc;
}, {spades: [], clubs: [], hearts: [], diamonds: []});

console.log(cards4);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
      {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
      },
      {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
          'css',
          'js',
          'mysql',
          'mongodb',
          'angular',
          'aws',
          'docker',
          'git',
          'java core',
          'java advanced']
      },
      {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
          'css',
          'js',
          'mysql',
          'mongodb',
          'angular',
          'aws',
          'docker',
          'python core',
          'python advanced']
      },
      {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
      },
      {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
          'css',
          'js',
          'mysql',
          'mongodb',
          'react',
          'angular',
          'aws',
          'docker',
          'git',
          'node.js',
          'python',
          'java']
      },
      {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
      }
    ];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((c) => c.modules.includes('sass')));

// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((c) => c.modules.includes('docker')));
