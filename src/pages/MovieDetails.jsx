import css from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'api/ApiTheMovieDB';
import MovieItem from 'components/MovieItem/MovieItem';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    getMovieById(movieId)
      .then(setMovie)
      .catch(error => setErrorMessage(error.message))
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link className={css.btn} to={location.state?.from ?? '/'}>
        Go back
      </Link>
      {loading && <Loader />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {movie && (
        <>
          <MovieItem {...movie} />
          <p>Additional information</p>
          <ul className={css.list}>
            <li>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetails;
