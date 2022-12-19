function sortYear(movies) {
  movies.sort(compYear);
  return movies;
}

function compYear(a, b) {
  if (a.year === b.year) {
    return compTitle(a, b);
  }
  return b.year < a.year ? 1 : -1;
}

function sortTitle(movies) {
  let result = movies.sort(compTitle);
  return result;
}

function removeThe(str) {
  let m = str.match(/^(the|The) (.+)/i);
  if (!m) {
    return str;
  } else {
    return m[2];
  }
}

function compTitle(a, b) {
  let titleA = removeThe(a.title).toLowerCase();
  let titleB = removeThe(b.title).toLowerCase();
  return titleA < titleB ? -1 : 1;
}

function inGenre(movies, genre) {
  let result = movies.filter(movie => {
    if (movie.genres.includes(genre)) {
      return movie;
    }
  });
  return result;
}

module.exports = {
  sortYear,
  sortTitle,
  inGenre,
};
