import MovieListItem from 'components/MoviesListItem/MoviesListItem';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {movies.map(movie => (
          <MovieListItem key={movie.id} title={movie.title} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
