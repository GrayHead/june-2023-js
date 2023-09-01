let str: string = 'asdas';
str = 'qwewqe';
// str = 1000
// str = true;

let num: number;

//....
//....
//....
//....
//....
//....
num = 100500;
// num = 'asgdjag';
// num = true;

let bool: boolean = true;
// bool = 100500;

// const x: number = '123';

let numbers: number[] = [213, 123];
let strings: string[] = ['ashdgjsahgd', 'qweqw'/*,123*/];


interface IUser {
    id: number;
    name: string;
    skills: string[];
    status?: boolean

}

let obj: IUser;

obj = {
    id: 123,
    name: 'ygsgfsd',
    skills: ['asdads', 'qweqwewq'],
}

let obj2: IUser = {
    id: 2,
    name: 'asdasdsa',
    skills: ['asd', 'qwe'],
    status: true
}


function calc(a: number, b: number): void {
    console.log(a + b);
}

calc(10, 20);

interface IUser2 {
    name: string;
    age: number;
    status: boolean;
}

let users: IUser2[] = [
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
    {name: 'max', age: 31, status: true},
];

// users.push({imua: 'asdad', vik: 12312});





