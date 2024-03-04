import css from './MoviesListItem.module.css';

const MoviesListItem = ({ title }) => {
  return <li className={css.item}>{title}</li>;
};

export default MoviesListItem;
