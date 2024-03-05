import css from './ReviewItem.module.css';

const ReviewItem = ({ author, content }) => {
  return (
    <li className={css.item}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

export default ReviewItem;
