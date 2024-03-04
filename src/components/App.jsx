import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Header from './Header/Header';
import css from './App.module.css';
import MovieItem from './MovieItem/MovieItem';

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieItem />}>
            <Route path="cast" element={<div>CAST</div>} />
            <Route path="reviews" element={<div>REVIEWS</div>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
