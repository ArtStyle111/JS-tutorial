"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: 'numberOfFilms',
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('1?',''),
      b = prompt('2?',''),
      c = prompt('1?',''),
      d = prompt('2?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);