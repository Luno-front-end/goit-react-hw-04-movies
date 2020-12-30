import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

import Api from "../../services/FetchAPI";

export default function MoviesViews() {
  const [page, setPage] = useState(1);
  const [valueSearch, setValueSearch] = useState("");
  const [moviesSearch, setMoviesSearch] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  // const useParamss = useParams();
  // console.log(useParamss);
  const { url } = useRouteMatch();
  // console.log(useRouteMatc);

  // useEffect(() => {}, [page, valueSearch]);

  const onSubmite = (e) => {
    e.preventDefault();

    myFetch();
    // setValueSearch("");
  };

  const myFetch = () => {
    Api.fetchApiSearch(page, valueSearch)
      .then(setMoviesSearch)
      .then(incrementPage())
      .catch((error) => setError(error));
  };

  const onValueSearchInput = (e) => {
    const { value } = e.currentTarget;
    setValueSearch(value);
  };

  const incrementPage = () => {
    setPage((state) => state + 1);
  };
  const nextPage = () => {
    myFetch();
  };
  // console.log(moviesSearch && moviesSearch.results.filter(({ id }) => id));

  return (
    <div>
      <form onSubmit={onSubmite}>
        <label htmlFor="1"> Введите название фильма</label>
        <input
          id="1"
          name="name"
          type="text"
          autoComplete="off"
          autoFocus
          value={valueSearch}
          onChange={onValueSearchInput}
        ></input>
        <button type="submit">Поиск</button>
      </form>
      {moviesSearch && (
        <div>
          <ul>
            {moviesSearch.results.map(({ original_title, id }) => (
              <li key={id}>
                {moviesSearch && (
                  <NavLink to={`${url}/${id}`}>{original_title}</NavLink>
                )}
              </li>
            ))}
          </ul>
          <button onClick={nextPage}>Следующая страница</button>
        </div>
      )}
    </div>
  );
}
