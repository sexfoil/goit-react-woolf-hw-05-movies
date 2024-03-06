import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovies } from 'api/ApiTheMovieDB';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = searchQuery.get('query');
    if (!query) return;

    setLoading(true);
    searchMovies(query)
      .then(setMovies)
      .catch(error => setErrorMessage(error.message))
      .finally(setLoading(false));
  }, [searchQuery]);

  const onMovieSearch = query => {
    if (query) {
      setSearchQuery({ query });
    }
  };

  return (
    <>
      <SearchForm
        query={searchQuery.get('query')}
        onMovieSearch={onMovieSearch}
      />
      {loading && <Loader />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
