import ReviewItem from 'components/ReviewItem/ReviewItem';

const ReviewList = ({ reviews }) => {
  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(review => {
        return <ReviewItem key={review.id} {...review} />;
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
};

export default ReviewList;
