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

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let num = 2;

while (num <= 16) {
    num++
    while (num % 2 ===0)
    console.log(num);
}