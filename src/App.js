import { useState, useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Loader from "./components/loader/loader";
import Api from "./services/FetchAPI";

const Container = lazy(() => import("./components/Container/Container"));
const HeaderBar = lazy(() => import("./components/HeaderBar/HeaderBar"));
const HomeViews = lazy(() => import("./components/views/HomeViews"));
const MoviesViews = lazy(() => import("./components/views/MoviesViews"));
const NotFoundViews = lazy(() => import("./components/views/NotFoundViews"));
const MovieDetailsPage = lazy(() =>
  import("./components/views/MovieDetailsPage")
);

export default function Movies() {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  const [listNameMovies, setListNameMovies] = useState([]);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAPI = () => {
    setLoader(true);

    Api.fetchApiMovies(page)
      .then(setListNameMovies)
      .then(setPage((state) => state + 1))
      .catch((error) => setError(error))
      .finally(() => setLoader(false));
  };
  const nextPageTrends = () => {
    fetchAPI();
  };

  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <HeaderBar />
        {loader && <Loader />}
        {error && <h1>{error.message}</h1>}
        <Switch>
          <Route exact path="/">
            <HomeViews arrayMovies={listNameMovies} />
            <button type="submite" onClick={nextPageTrends}>
              Следующие тренды
            </button>
          </Route>
          <Route exact path="/movies">
            <MoviesViews />
          </Route>
          <Route path="/movies/:moviesId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundViews />
          </Route>
        </Switch>
      </Container>
    </Suspense>
  );
}
