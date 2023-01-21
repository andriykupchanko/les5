"use strict";
// let numberOfFilms = +prompt("How wathch films ?", 1);

// let personalMovieDb = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };
// const LastMovie = prompt("How wathch the last films ?", ""),
//     RatengMovie = prompt("How reteng 1-10 ?", ""); 

// personalMovieDb.movies[LastMovie] = RatengMovie;

// console.log(personalMovieDb);

// if (4 == 5) {
//     console.log("you lox");
// } else {
//     console.log("ok");
// }

// const num = 50;

// if (num < 49) {
//     console.log("Error!");
// } else if (num > 100) {
//     console.log("Hight olds.");
// } else {
//     console.log("Its Ok.");
// }
// (num === 50) ? console.log("Its Ok."): console.log("Error!");

// switch (num) {
//     case 49:
//         console.log("Error!");
//         break;
//     case 100:
//         console.log("Hight olds.");
//         break;
//     default:
//         console.log("Its Ok.");
//         break;
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }
// do{
//     console.log(num);
//     num++;
// }while(num<=55);

// for (let i = 0; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);

// }

// let numberOfFilms = +prompt("How wathch films ?", 1);

// let personalMovieDb = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDb.count <= 30) {
//     if (personalMovieDb.count <= 10) {
//         console.log("Watched Normal Movies");
//     } else {
//         console.log("Watched Few Movies");
//     }
// } else {
//     console.log("Your Movie Fans!");
// }

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

// }
// console.log(personalMovieDb);


// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//         i--;
//     }

// } while (i < 2);
// console.log(personalMovieDb);