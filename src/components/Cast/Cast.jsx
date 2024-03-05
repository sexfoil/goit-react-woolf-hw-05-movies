import css from './Cast.module.css';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'api/ApiTheMovieDB';
import ActorList from 'components/ActorList/ActorList';

const Cast = () => {
  const [credits, setCredits] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    console.log('Cast mount...');
    setLoading(true);
    getCredits(movieId)
      .then(setCredits)
      .catch(error => setErrorMessage(error.message))
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {credits && <ActorList actors={credits.cast} />}
    </div>
  );
};

export default Cast;
