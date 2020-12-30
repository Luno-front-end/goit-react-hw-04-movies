import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import shortid from "shortid";

export default function Home({ arrayMovies }) {
  const { results } = arrayMovies;

  return (
    <div>
      <h1>Фільми в тренді</h1>
      <ul>
        {results &&
          results.map(({ title, name, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title ?? name} </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
