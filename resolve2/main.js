// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const arr = [1, 3, 'sdfg', true];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book1 = {
    title: 'qwertyui',
    pageCount: 150,
    genre: 'comedy'
};
console.log(book1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const book2 = {
    title: 'qwertyui',
    pageCount: 150,
    genre: 'comedy',
    authors: [
        {name: 'Antonio', age: 13},
        {name: 'Maksym', age: 45},
    ]
};
console.log(book2);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: "Alina", username: "alina02444", password: "oojh"},
    {name: "Tamara", username: "tamarka08", password: "qwertyqw1234"},
    {name: "Maks", username: "meksik34", password: "qwertyqw1234"},
    {name: "Anton", username: "wertyujkhg", password: "qwe"},
    {name: "Dima", username: "fdgdfg", password: "qwertyqw1234"},
    {name: "Edik", username: "sdfgdf", password: "jhgf"},
];
console.log('password : ', users[0].password);
console.log('password : ', users[1].password);
console.log('password : ', users[2].password);
console.log('password : ', users[3].password);
console.log('password : ', users[4].password);
console.log('password : ', users[5].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x1 = -3;
if (x1 !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x1 !== 0
    ? console.log('Вірно')
    : console.log('Невірно');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 18;
if (time > 45 && time <= 59) {
    console.log('четверту частину години')
} else if (time > 30 && time <= 45) {
    console.log('третю частину години')
} else if (time > 15 && time <= 30) {
    console.log('другу частину години')
} else if (time > 0 && time <= 15) {
    console.log('першу частину години')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 30;
if (day > 0 && day <= 10) {
    console.log('1 декада');
} else if (day > 10 && day <= 20) {
    console.log('2 декада');
} else if (day > 20 && day <= 31) {
    console.log('3 декада');
} else {
    console.log('Wrong day');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day2 = 8;
switch (day2) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.error('Error');

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 1;
let b = 2;
if (a > b) {
    console.log('a: ', a);
} else if (b > a) {
    console.log('b: ', b);
} else if (b === a) {
    console.log('equal');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x ;
x = x || 'default';
x = x ?? 'default';

console.log(x);


// let xx1 = false;
// if (!xx1) {
//     xx1 = "default";
//     console.log('dddddd',xx1)
// } else {
//     console.log(xx1)
// }


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super!!!');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super!!!');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super!!!');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super!!!');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super!!!');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super!!!');
}
