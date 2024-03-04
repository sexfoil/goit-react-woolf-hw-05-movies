import css from './MoviesList.module.css';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {movies.map(movie => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <MoviesListItem title={movie.title} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
