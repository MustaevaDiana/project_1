" use strict";

const numberofFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
        count:numberofFilms,
        movies:{},
        actors:{},
        genres:[],
        privat:false,
};

