import ReviewItem from 'components/ReviewItem/ReviewItem';

const ReviewList = ({ reviews }) => {
  return reviews ? (
    <ul>
      {reviews.map(review => {
        return <ReviewItem key={review.id} {...review} />;
      })}
    </ul>
  ) : (
    "We don't have any reviews for this film"
  );
};

export default ReviewList;
