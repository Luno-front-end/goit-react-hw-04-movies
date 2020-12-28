import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Api from "../../services/FetchAPI";

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

  return <div>тут сторынка з цим id {movie && movie.title}</div>;
}
