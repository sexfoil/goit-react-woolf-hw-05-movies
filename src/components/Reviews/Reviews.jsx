import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/ApiTheMovieDB';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import ReviewList from 'components/ReviewList/ReviewList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    getReviews(movieId)
      .then(setReviews)
      .catch(error => setErrorMessage(error.message))
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {reviews && <ReviewList reviews={reviews} />}
    </div>
  );
};

export default Reviews;
