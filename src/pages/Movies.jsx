import { Outlet } from 'react-router-dom';
import css from './Movies.module.css';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/ApiTheMovieDB';

const Movies = () => {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   getTrendingMovies()
  //     .then(setMovies)
  //     .catch(err => console.log(err.message))
  //     .finally(console.log('END API CALL'));
  // }, []);

  return (
    <>
      <div className={css.container}>Movies page</div>
      <Outlet />
    </>
  );
};

export default Movies;
