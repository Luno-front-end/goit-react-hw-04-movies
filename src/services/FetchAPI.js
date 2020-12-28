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

const api = {
  fetchApiMovies,
  fetchApiOneMovie,
};
export default api;
