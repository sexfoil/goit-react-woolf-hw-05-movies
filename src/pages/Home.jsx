import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/ApiTheMovieDB';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then(setMovies)
      .catch(err => setErrorMessage(err.message))
      .finally(setLoading(false));
  }, []);

  return (
    <div className={css.container}>
      <h3>Trending movies:</h3>
      {loading && <Loader />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
