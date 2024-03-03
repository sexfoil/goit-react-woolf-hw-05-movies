import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import { useEffect, useState } from 'react';
import { searchMovies } from 'api/ApiTheMovieDB';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    const query = searchQuery.get('query');
    if (!query) return;

    searchMovies(query)
      .then(setMovies)
      .catch(err => console.log(err.message))
      .finally(console.log('END API CALL'));
  }, [searchQuery]);

  const onMovieSearch = query => {
    if (query.trim()) {
      setSearchQuery({ query });
    }
  };

  return (
    <>
      <SearchForm
        query={searchQuery.get('query')}
        onMovieSearch={onMovieSearch}
      />
      <div className={css.container}>
        {movies && <MovieList movies={movies} />}
      </div>
    </>
  );
};

export default Movies;
