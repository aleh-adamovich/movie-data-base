const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '10');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

const question1 = prompt('Один из последних просмотренных фильмов?');
const question2 = prompt('Насколько оцените его?');
const question3 = prompt('Один из последних просмотренных фильмов?');
const question4 = prompt('Насколько оцените его?');

personalMovieDB.movies[question1] = question2;
personalMovieDB.movies[question3] = question4;
