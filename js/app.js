"use strict";
let numberOfFilms = +prompt("How wathch films ?", 1);

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

console.log(personalMovieDb);