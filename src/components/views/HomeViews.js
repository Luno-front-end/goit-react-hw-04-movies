import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import shortid from "shortid";

export default function Home({ arrayMovies }) {
  // const u = useRouteMatch();
  // console.log(u);

  return (
    <div>
      <h1>Фільми в тренді</h1>
      <ul>
        {arrayMovies.map(({ title, name, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title ?? name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
