import css from './MovieListItem.module.css';

const MovieListItem = ({ title }) => {
  return <li className={css.item}>{title}</li>;
};

export default MovieListItem;
