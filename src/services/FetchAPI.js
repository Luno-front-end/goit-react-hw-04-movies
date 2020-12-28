function fetchApiMovies(page) {
  const KEY = "6afe4b8475996e1addf24229c39e89a6";
  const GENERAL_LINK_TRENDS = "https://api.themoviedb.org/3/trending/all/day";
  return fetch(
    `${GENERAL_LINK_TRENDS}?api_key=${KEY}&language=ru&page=${page}`
  ).then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error("Такого запроса не існує"));
  });
}

function fetchApiSearch(page, query) {
  const KEY = "6afe4b8475996e1addf24229c39e89a6";
  const GENERAL_LINK_TRENDS = "https://api.themoviedb.org/3";
  return fetch(
    `${GENERAL_LINK_TRENDS}/search/movie?api_key=${KEY}&query=${query}&language=ru&page=${page}&include_adult=false`
  ).then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error("Такого запроса не існує"));
  });
}

function fetchApiOneMovie(idMovie) {
  const KEY = "6afe4b8475996e1addf24229c39e89a6";
  const GENERAL_LINK_ONE_MOVIE = "https://api.themoviedb.org/3/movie/";

  return fetch(
    `${GENERAL_LINK_ONE_MOVIE}${idMovie}?api_key=${KEY}&language=ru`
  ).then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error("Такого фільма не існує"));
  });
}

function fetchApiReviews(idMovie) {
  const KEY = "6afe4b8475996e1addf24229c39e89a6";
  const GENERAL_LINK_ONE_MOVIE = "https://api.themoviedb.org/3/movie/";

  return fetch(
    `${GENERAL_LINK_ONE_MOVIE}${idMovie}/reviews?api_key=${KEY}`
  ).then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error("Такої сторінки з кастами не існує"));
  });
}

function fetchApiCasts(idMovie) {
  const KEY = "6afe4b8475996e1addf24229c39e89a6";
  const GENERAL_LINK_ONE_MOVIE = "https://api.themoviedb.org/3/movie/";

  return fetch(
    `${GENERAL_LINK_ONE_MOVIE}${idMovie}/credits?api_key=${KEY}&language=ru&page=1`
  ).then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error("Такої сторінки з кастами не існує"));
  });
}

const api = {
  fetchApiMovies,
  fetchApiSearch,
  fetchApiOneMovie,
  fetchApiReviews,
  fetchApiCasts,
};
export default api;
