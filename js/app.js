"use strict";
/*let numberOfFilms = +prompt("How wathch films ?", 1);

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const LastMovie = prompt("How wathch the last films ?", ""),
    RatengMovie = prompt("How reteng 1-10 ?", ""); 

personalMovieDb.movies[LastMovie] = RatengMovie;

console.log(personalMovieDb);*/

if (4 == 5) {
    console.log("you lox");
} else {
    console.log("ok");
}

const num = 50;

if (num < 49) {
    console.log("Error!");
} else if (num > 100) {
    console.log("Hight olds.");
} else {
    console.log("Its Ok.");
}
(num === 50) ? console.log("Its Ok."): console.log("Error!");

switch (num) {
    case 49:
        console.log("Error!");
        break;
    case 100:
        console.log("Hight olds.");
        break;
    default:
        console.log("Its Ok.");
        break;
}