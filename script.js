'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: true,
  start() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели? Введите число');

    while (personalMovieDB.count === 0 || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели? Введите число');
    }
  },
  rememberMyFilms() {
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
  },
  writeYourGenres() {
    let answer;

    for (let i = 1; i <= 3; i++) {
      answer = prompt(`Ваш любимый жанр под номером ${i}`);

      while (answer === null || !isNaN(+answer)) {
        answer = prompt(`Ваш любимый жанр под номером ${i}`);
      }

      personalMovieDB.genres.push(answer);
    }

    personalMovieDB.genres.forEach((genre, index) => {
      console.log(`Любимый жанр #${index + 1} - это ${genre}`);
    });
  },
  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },
  showMyDB(db) {
    if (!db.private) {
      console.log(db);
    }
  },
  toggleVisibleMyDB() {
    this.private = !this.private;
  }
}

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB);
