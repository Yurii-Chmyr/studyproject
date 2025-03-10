"use strict"


// const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//     actors: {},
//     genres: [],
//    privat:false

// };

// const a = prompt('Один із останніх переглянутих фільмів?', ''),
//      b = prompt('На скільки ви його оціните?', ''),
//      c = prompt('Один із останніх переглянутих фільмів?', ''),
//      d = prompt('На скільки ви його оціните?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
      
// console.log(personalMovieDB);

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Not Ok!');
// };



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too much');
// } else {
//     console.log('Ok');
// }

// (num === 59) ? console.log('ok') : console.log('Error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Not True');
//         break;
//     case 100:
//         console.log('Not True2');
//         break;
//     case 50:
//         console.log('True');
//         break;
//     default:
//         console.log('LoL');
//         break;
// }

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я ситий');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Всі ситі');
// } else {
//     console.log('Ми йдемо');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Всі довольні');
// } else {
//     console.log('Ми йдемо');
// }

// console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport)

// console.log(!0);

// console.log(NaN||2||undefined);

// console.log (NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log(!1 && 2 || !3);

// console.log (25 || null && !3);

// console.log (NaN || null || !3 || undefined || 5);

// console.log (NaN || null && !3 && undefined || 5);

// console.log (5 === 5 && 3 > 1 || 5);


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
    
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n'
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// let num = 5;

// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// for (let i = 20; i > 10; i--) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }

// for (let i=2; i < 11; i++) {
//     if (i % 2 === 1) continue;
//     console.log(i);
// }



// let num = 2;

// while (num <= 16) {
//     if (num % 2 !== 0) {
//         console.log(num);
//     }
//     num++;
// }

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
    

//     result[0] = arr[0];
//     result[1] = arr[1];
//     result[2] = arr[2];
//     result[3] = arr[3];
//     result[4] = arr[4];
//     result[5] = arr[5];
//     result[6] = arr[6];

//     console.log(result);


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//     console.log(result);
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }

// console.log(data);
// return data;

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(result);
// return result;


// const lines = 5;
// let result = '';

// for (let i = 1; i < lines; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n'
//     console.log(result);
// }

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

// const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//     actors: {},
//     genres: [],
//    privat:false

// };

// const a = prompt('Один із останніх переглянутих фільмів?', ''),
//      b = prompt('На скільки ви його оціните?', ''),
//      c = prompt('Один із останніх переглянутих фільмів?', ''),
//      d = prompt('На скільки ви його оціните?', '');



// for (let i = 0; i < 2; i++) { 
//     const a = prompt('Один із останніх переглянутих фільмів?', ''),
//           b = prompt('На скільки ви його оціните?', '');

//           if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//           } else {
//             console.log('error');
//             i--;
//           }
//         }
           

// if (personalMovieDB.count < 10) {
//         console.log("Переглянуто мало фільмів");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Ви класичний глядач");

//     } else if (personalMovieDB.count >= 30) {
//         console.log("Ви кіноман!");
//     } else {
//         console.log("Сталась помилка!");
//     }


// console.log(personalMovieDB);

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     // let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


// function ret() {
//         let num = 50;
//         return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello');

// };

// logger();

// const calc = (a, b) => { return a + b };

// const usdCurr = 28;
// const eurCurr = 32;

// function convert (amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// const usdCurr = 28;
// const discount = 0.9;

// function convert (amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);

// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }

// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// sayHello('Alex');


// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);


// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);


// const str = "teSt";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseFloat(test));

// let numberOfFilms;

// function start () {
//     numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//           numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

//     }
// }

// start();

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//     actors: {},
//     genres: [],
//    privat:false

// };

// function rememberMyFilms() {
// for (let i = 0; i < 2; i++) { 
//     const a = prompt('Один із останніх переглянутих фільмів?', ''),
//           b = prompt('На скільки ви його оціните?', '');

//           if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//           } else {
//             console.log('error');
//             i--;
//           }
//         }
// }   

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Переглянуто мало фільмів");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Ви класичний глядач");

//     } else if (personalMovieDB.count >= 30) {
//         console.log("Ви кіноман!");
//     } else {
//         console.log("Сталась помилка!");
//     }
// }
   
// detectPersonalLevel();

// const personalMovieDB = {
//     count: 1,
//     movies: {},
//      actors: {},
//      genres: [],
//     privat:false
 
//  };
 

// function showMyDb(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB)
//     }
        
// }

// showMyDb(personalMovieDB.privat);

// function writeYourGenres() {
//     for ( let i = 1; i <= 3; i++) {
//        const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
//        personalMovieDB.genres[i - 1] = genre;
//     } 
    
// }

// writeYourGenres();


// console.log(personalMovieDB);



// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(5);

// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// getCoupeNumber(33);

// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// getTimeFromMinutes(180)

// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }

// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib(5);

// function first() {
//     // smth
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS (lang, callback) {
//     console.log(`Я вчу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я пройшов цей урок!');
// }

// learnJS('JavaScript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };


// options.makeTest();


// const {border, bg} = options.colors;
// console.log(border);


// console.log(Object.keys(options).length);


// const DB = {
//     firstName: '',
//     lastName: '',
//     age: '',
//     gender: true,
//     city: ''
// }

// console.log(Object.keys(DB).length);

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Властивість ${i} має значення ${options[key][i]}`)
//             counter++;
//         }
//     } else {
//         console.log(`Властивість ${key} має значення ${options[key]}`)
//         counter++;
//     }
// };

// console.log(counter);

// const arr = [1, 2, 3 , 6, 8, 10];

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} всередині масива ${arr}`);
// })

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(';'));


// const arr = [1, 2, 3, 6, 8, 10];

// arr.sort(compareNum);

// console.log(arr);

// function compareNum (a, b) {
//     return a - b;
// }

// let a = 5,
//     b = a;

//     b = b + 5;

    // console.log(b);
    // console.log(a);

    // const obj = {
    //     a: 5,
    //     b: 1
    // };

    // const copy = obj;

    // copy.a = 10;

    // console.log(copy);
    // console.log(obj);


    // function copy(mainObj) {
    //     let objCopy = {};

    //     let key;
    //     for (key in mainObj) {
    //         objCopy[key] = mainObj[key];
    //     }

    //     return objCopy;
    // }

    // const numbers = {
    //     a: 2,
    //     b: 5,
    //     c: {
    //         x: 7,
    //         y: 4
    //     }
    // };

    // const newNumbers = copy(numbers);

    // newNumbers.a = 10;
    // newNumbers.c.x = 10;

    // console.log(newNumbers);
    // console.log(numbers);

    // const add = {
    //     d: 17,
    //     e: 20
    // };

    // console.log(Object.assign(numbers, add))

    // const clone = Object.assign({}, add);

    // clone.d = 20;

    // console.log(add);
    // console.log(clone);

//     const oldArray = ['a', 'b', 'c'];
//     const newArray = oldArray.slice();

//     newArray[1] = 'sdsdsd';
//     console.log(newArray);
//     console.log(oldArray);

//     const video = ['youtube', 'vimeo', 'rutube'],
//           blogs = ['wordpress', 'livejournal', 'blogger'],
//           internet = [...video, ...blogs, 'vk', 'facebook'];

//           console.log(internet);

// function log (a, b ,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAaray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },

//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }

// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     console.log(plan["skills"]["exp"]);
// }


// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor :100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = Object.create(soldier);


// const john = {
//     health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
// john.sayHello();

// const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

// const personalMovieDB = {
//    count: 0,
//    movies: {},
//     actors: {},
//     genres: [],
//    privat:false,

//    start: function() {
//     personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');

//     while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//         personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');

//     }
// },

// rememberMyFilms: function () {
// for (let i = 0; i < 2; i++) { 
//     const a = prompt('Один із останніх переглянутих фільмів?', ''),
//           b = prompt('На скільки ви його оціните?', '');

//           if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//           } else {
//             console.log('error');
//             i--;
//           }
//         }
// },

// detectPersonalLevel: function() {
//     if (personalMovieDB.count < 10) {
//         console.log("Переглянуто мало фільмів");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Ви класичний глядач");

//     } else if (personalMovieDB.count >= 30) {
//         console.log("Ви кіноман!");
//     } else {
//         console.log("Сталась помилка!");
//     }
// },

// showMyDb: function (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB)
//     }
        
// },

// writeYourGenres: function() {
//     for ( let i = 1; i < 2; i++) {
        // let genre = prompt(`Ваш улюблений жанр під номером ${i}`);

        // if (genre === "" || genre == null) {
        //     console.log('Ви ввели некоретні дані або не ввелі їх взагалі');
        //     i--;
        // } else {
        //     personalMovieDB.genres[i - 1] = genre;

        // let genres = prompt(`Введіть ваші улюблені жанри через кому`).toLowerCase();
           
        // if (genres === "" || genres == null) {
        //     console.log('Ви ввели некоретні дані або не ввелі їх взагалі');
        //     i--;
        // } else {
        //     personalMovieDB.genres = genres.split(', ');
        //     personalMovieDB.genres.sort();

        // }

//        personalMovieDB.genres.forEach((item, i) => {
//         console.log(`Улюблений жанр ${i + 1} - це ${item}`);
//        });

//     } 
    
// },

// toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) {
//         personalMovieDB.privat = false;
//     } else {
//         personalMovieDB.privat = true;
//     }
// },

// };


// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// isBudgetEnough(shoppingMallData);

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// sortStudentsByGroups(students);

// to string

// 1)

// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// 2)

// console.log(typeof(5 + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// To Number

// 1)

// console.log(typeof(Number('4')));


// 2)

// console.log(typeof(+'4'));

// 3)

// console.log(typeof(parseInt("15px", 10)));


// let answ = +prompt("Hello", "");

// to boolean

// 1)
// 0, '', null, undefined, NaN; // false

// let switcher = 1;

// if (switcher) {
//     console.log('Working....');
// }


// 3)

// console.log(typeof(!!'444444'));

// let number = 5; debugger

// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }

//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//         let num = 3;
//     }

//     console.log(num);
// }

// console.log(typeof([] + false));

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};



// function isOpen(prop) {
//     if (prop.openNow === true) {
//         return 'Відкрито'; }
//         else {
//         return 'Закрито';
//         }
 
// }

// console.log(isOpen(restorantData));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (parseInt(fDish) + parseInt(sDish) < parseInt(average)) {
        
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
    
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[1].price, restorantData.menu[0].price, restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const waitors = [data.waitors];
//     const copyWaitors = [...waitors];
//     copyWaitors[1] = {name: 'Mike', age: 32};
//     console.log(copyWaitors);
//     console.log(waitors);
// }

// transferWaitors(restorantData);

function copyingWaitors(data) {
    let waitorsCopy = {};

    let key;
    for (key in data) {
        waitorsCopy[key] = data[key];
    }
    console.log(waitorsCopy);
    waitorsCopy[0] = {name: 'Mike', age: 32};
    return waitorsCopy;
}

copyingWaitors(restorantData.waitors);

