import { useState, useEffect, lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Container from "./components/Container/Container";
import Loader from "./components/loader/loader";
import Api from "./services/FetchAPI";

import "./styles/styles.css";

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

  const location = useLocation();
  console.log("HOME", location);

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
    <Container>
      <Suspense fallback={<Loader />}>
        <HeaderBar />
        {loader && <Loader />}
        {error && <h1>{error.message}</h1>}
        <main className="infoBlock">
          <section className="holder">
            <Switch>
              <Route exact path="/">
                <HomeViews arrayMovies={listNameMovies} location={location} />
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
          </section>
        </main>
      </Suspense>
    </Container>
  );
}
