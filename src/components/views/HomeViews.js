import { Link, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import shortid from "shortid";

export default function Home({ arrayMovies }) {
  const location = useLocation();
  const { results } = arrayMovies;

  return (
    <div className="constainerHome">
      <h1 className="nameSactionHome">Фільми в тренді</h1>
      <ul className="g-ul containerTrends">
        {results &&
          results.map(({ title, name, id }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
                className="g-a linkFilms"
              >
                <span className="titleTextListTrends">{title ?? name}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
