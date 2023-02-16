let numberOfFilms;

do {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? Введите число');
} while (numberOfFilms === 0 || isNaN(numberOfFilms));

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

for (let i = 0; i < 2; i++) {
  let q1 = prompt('Один из последних просмотренных фильмов?');
  let q2;

  if (typeof q1 === 'string') {
    q1 = q1.trim();
  }

  if (q1 === '' || q1 === null || q1.length > 10) {
    i--;
  } else {
    let i = 0;

    do {
      q2 = prompt('Насколько оцените его? Введите число');

      if (typeof q2 === 'string') {
        q2 = q2.trim();
      }

      i++;
    } while (q2 === '' || q2 === null || isNaN(q2) || i < 1);

    personalMovieDB.movies[q1] = q2;
  }
}

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}

console.log(personalMovieDB);
