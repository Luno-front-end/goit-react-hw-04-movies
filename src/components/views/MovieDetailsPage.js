import { useParams, Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Api from "../../services/FetchAPI";
import Cast from "./Cast";
import Reviews from "./Reviews";

export default function MovieCard() {
  const { moviesId } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.fetchApiOneMovie(moviesId)
      .then(setMovie)
      .catch((error) => setError(error));
  }, [moviesId]);
  // console.log(movie.title);
  const calckRating = (a) => {
    return Math.round((a * 100) / 10);
  };
  return (
    <div>
      <img
        src={movie && `https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt=""
      ></img>

      <h1>{movie && movie.title}</h1>
      <p>Средняя оценка: {movie && calckRating(movie.vote_average)}%</p>
      <div>
        <h2>Описание</h2>
        <p>{movie && movie.overview}</p>
      </div>
      <div>
        <h3>Жанр</h3>
        <ul>
          {movie &&
            movie.genres.map(({ id, name }) => <li key={id}>{name} </li>)}
        </ul>
      </div>
      <div>
        <hr />
        <Link to={`/movies/${moviesId}/cast`}>Актеры</Link> <br />
        <Link to={`/movies/${moviesId}/reviews`}>Обзоры (Eng)</Link>
        <hr />
        <Route path="/movies/:moviesId/cast">
          {movie && <Cast casts={movie} />}
        </Route>
        <Route path="/movies/:moviesId/reviews">
          <Reviews />
        </Route>
      </div>
    </div>
  );
}
