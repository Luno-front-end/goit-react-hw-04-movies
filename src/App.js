import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Container from "./components/Container/Container";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import HomeViews from "./components/views/HomeViews";
import MoviesViews from "./components/views/MoviesViews";
import NotFoundViews from "./components/views/NotFoundViews";
import MovieDetailsPage from "./components/views/MovieDetailsPage";

import Api from "./services/FetchAPI";

export default function Movies() {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  const [listNameMovies, setListNameMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fetchAPI() {
    Api.fetchApiMovies(page)
      .then((movies) => setListNameMovies(movies.results))
      .catch((error) => setError(error));
  }
  // const incrementPage = () => {
  //   setPage((state) => state + 1);
  // };

  return (
    <Container>
      <HeaderBar />
      {error && <h1>{error.message}</h1>}
      <Switch>
        <Route exact path="/">
          <HomeViews arrayMovies={listNameMovies} />
        </Route>
        <Route exact path="/movies">
          <MoviesViews />
        </Route>
        <Route path="/movies/:moviesId">
          <MovieDetailsPage page={page} listId={listNameMovies} />
        </Route>

        {/* <button type="button" onClick={incrementPage}>
        hfauiwehfja
      </button> */}
        <Route>
          <NotFoundViews />
        </Route>
      </Switch>
    </Container>
  );
}
