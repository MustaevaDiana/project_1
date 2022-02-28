" use strict";
//1
const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberofFilms);
//2
const personalMovieDB = {
        count:numberofFilms,
        movies:{},
        actors:{},
        genres:[],
        privat:false,
};
//3

const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько вы его оцените?',''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('На сколько вы его оцените?','');

/* personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
const answerMovieWatched = [];

answerMovieWatched[0] = prompt('Один из последних просмотренных фильмов', '');
answerMovieWatched[1] = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies = {
        first:answerMovieWatched[0],
        second:answerMovieWatched[1],
};  */





