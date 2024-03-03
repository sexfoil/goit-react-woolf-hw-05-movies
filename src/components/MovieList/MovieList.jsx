import MovieListItem from 'components/MovieListItem/MovieListItem';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <MovieListItem key={movie.id} title={movie.title} />
      ))}
    </ul>
  );
};

export default MovieList;
