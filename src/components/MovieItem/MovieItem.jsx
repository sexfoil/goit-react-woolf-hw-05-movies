import css from './MovieItem.module.css';
import { TheMovieDB, NO_IMAGE } from '../../constants/ApiData';

const { RESOURCE_URL } = TheMovieDB;

const MovieItem = ({ poster_path, title, vote_average, overview, genres }) => {
  const imageUrl = poster_path ? `${RESOURCE_URL}${poster_path}` : NO_IMAGE;
  return (
    <div className={css.item}>
      <img className={css.poster} src={imageUrl} alt={title} />
      <div className={css.info}>
        <h1>{title}</h1>
        <p>User score: {`${Math.round(vote_average * 10)}%`}</p>
        <h2>Overview</h2>
        <p>{overview ? overview : 'N/A'}</p>
        <h3>Genres</h3>
        <p>
          {genres.length !== 0 ? '| ' : 'N/A'}
          {genres.map(genre => {
            return <span key={genre.id}>{`${genre.name} | `} </span>;
          })}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
