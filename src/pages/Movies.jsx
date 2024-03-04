import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovies } from 'api/ApiTheMovieDB';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchQuery.get('query');
    if (!query) return;

    searchMovies(query)
      .then(setMovies)
      .catch(err => console.log(err.message))
      .finally(console.log('END API CALL'));
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
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
