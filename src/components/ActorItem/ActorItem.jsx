import css from './ActorItem.module.css';
import { TheMovieDB, NO_IMAGE } from '../../constants/ApiData';

const { RESOURCE_URL } = TheMovieDB;

const ActorItem = ({ profile_path, character, name }) => {
  const imageUrl = profile_path ? `${RESOURCE_URL}${profile_path}` : NO_IMAGE;

  return (
    <li className={css.item}>
      <img className={css.image} src={imageUrl} alt={name} />
      <div className={css.info}>
        <h3>{name}</h3>
        <p>{character}</p>
      </div>
    </li>
  );
};

export default ActorItem;
