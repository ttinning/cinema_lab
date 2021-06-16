const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilms = function() {
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
};

Cinema.prototype.findFilm = function(filmTitle) {
  const result = this.films.find((film) => {
    return film.title === filmTitle;
  });
  return result;
};

// Cinema.prototype.filterGenre = function(filmGenre) {
//   const result = this.films.filter((film) => {
//     return film.genre === filmGenre;
//   });
//   return result;
// };

Cinema.prototype.checkYear = function(filmYear) {
  const result = this.films.some((film) => {
    return film.year === filmYear;
  }); 
  return result;
};

Cinema.prototype.checkFilmLength = function(filmLength) {
  const result = this.films.every((film) => {
    return film.length >= filmLength;
  });
  return result;
};

Cinema.prototype.totalRunningTime = function() { 
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return result;
};

Cinema.prototype.filterByProperty = function(search, property) {
  const result = this.films.filter((film) => {
    return film[property] === search;
  });
  return result;
}

module.exports = Cinema;
