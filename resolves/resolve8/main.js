// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231'),
    new User(2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231'),
    new User(3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631'),
    new User(4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111'),
    new User(5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555'),
    new User(6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345'),
    new User(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787'),
    new User(8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925573434'),
    new User(9, 'Gari', 'Tesko', 'gari@gmail.com', '+380925572317'),
    new User(10, 'Ron', 'Kapper', 'germionalover@gmail.com', '+380921315577'),
];
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filteredUsers = users.filter((user) => !(user.id % 5));
console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortedUsers = users.sort((a, b) => a.id - b.id);

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
function Client(id, name, surname, email, phone, order) {
    User.call(this, id, name, surname, email, phone)
    this.order = order;
}

const clients = [
    new Client(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231', [
        'apple', 'bread', 'milk', 'malone', 'bear'
    ]),
    new Client(2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231', [
        'apple', 'bread', 'milk',
    ]),
    new Client(3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631', [
        'apple', 'bread'
    ]),
    new Client(4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111', [
        'apple', 'bread', 'milk', 'malone', 'bear'
    ]),
    new Client(5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555', [
        'apple', 'bread'
    ]),
    new Client(6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345', [
        'milk', 'malone', 'bear'
    ]),
    new Client(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787', [
        'apple',
    ]),
    new Client(8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925573434', [
        'apple', 'bread', 'milk', 'malone'
    ]),
    new Client(9, 'Gari', 'Tesko', 'gari@gmail.com', '+380925572317', [
        'apple', 'bread', 'milk', 'malone', 'bear'
    ]),
    new Client(10, 'Ron', 'Kapper', 'germionalover@gmail.com', '+380921315577', [
        'bear'
    ]),
];

// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortedArr = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedArr);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car1(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.driver = null;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log('****** INFO ******');
        for (const key in this) {
            if (typeof this[key] === 'function') {
                continue;
            }
            console.log(`${key.toUpperCase()}: `, this[key]);
        }
        console.log('****** INFO ******');
    }
    this.increaseMaxSpeed = function (addedSpeed) {
        this.maxSpeed += addedSpeed;
    }
    this.changeYear = function (newYear) {
        this.year = newYear;
    }
    this.addDriver = function (addedDriver) {
        this.driver = addedDriver;
    }
}

// const car1 = new Car1('X5', 'BMW', 2010, 110, 5.3)
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(30);
// car1.info();
// car1.changeYear(2220);
// car1.info();
//
// function Driver(name, year, exp) {
//     this.name = name;
//     this.year = year;
//     this.exp = exp;
// }
//
// const driver = new Driver('Maks', 2005, 2);
// car1.addDriver(driver);
// car1.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = null;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log('****** INFO ******');
        for (const key in this) {
            console.log(`${key.toUpperCase()}: `, this[key]);
        }
        console.log('****** INFO ******');
    }

    increaseMaxSpeed(addedSpeed) {
        this.maxSpeed += addedSpeed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(addedDriver) {
        this.driver = addedDriver;
    }
}

const car2 = new Car2('A6', 'Audi', 2023, 400, 2.5);
car2.drive();
car2.info();
car2.increaseMaxSpeed(30);
car2.info();
car2.changeYear(2220);
car2.info();

class Driver {
    constructor(name, year, exp) {
        this.name = name;
        this.year = year;
        this.exp = exp;
    }
}

const driver = new Driver('Maks', 2005, 2);
car2.addDriver(driver);
car2.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Popelushka extends Human {
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}
class Prince extends Human {
    constructor(name, age, bootSize) {
        super(name, age);
        this.bootSize = bootSize;
    }
    findPrincess1(arr) {
        for (const popelushka of arr) {
            if (popelushka.footSize === this.bootSize) {
                return popelushka;
            }
        }
    }
    findPrincess2(arr) {
        return arr.find((popelushka) => popelushka.footSize === this.bootSize)
    }
}

const popelArr = [
    new Popelushka('Albina', 34, 15),
    new Popelushka('Tamara', 39, 18),
    new Popelushka('Anna', 41, 40),
    new Popelushka('Inna', 32, 35),
    new Popelushka('Oksana', 16, 36),
    new Popelushka('Irina', 66, 38),
    new Popelushka('Tania', 40, 35),
    new Popelushka('Sergey', 26, 45),
];
const prince = new Prince('Sergey', 30, 40);
console.log(prince.findPrincess1(popelArr));
console.log('** ****** ***** ')
console.log(prince.findPrincess2(popelArr));


