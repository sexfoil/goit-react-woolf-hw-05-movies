import { useEffect, useState } from 'react';
import css from './Home.module.css';
import { getTrendingMovies } from 'api/ApiTheMovieDB';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

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
      {movies && <MovieList movies={movies}>SOME</MovieList>}
    </div>
  );
};

export default Home;
