import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Api from "../../services/FetchAPI";

export default function Reviews() {
  const { moviesId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    Api.fetchApiReviews(moviesId)
      .then(setReviews)
      .catch((error) => setError(error));
  }, [moviesId]);

  return (
    <ul>
      {reviews &&
        reviews.results.map(({ author, id, content }) => (
          <li key={id}>
            <p>Автор: {author}</p> <p>{content}</p>
          </li>
        ))}
    </ul>
  );
}
// {
//   cast.title;
// }
