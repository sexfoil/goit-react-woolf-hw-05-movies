import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import css from './App.module.css';
import Header from './Header/Header';

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movies />} />
          <Route path="movie/:movieId" element={<Movies />}>
            <Route path="cast" element={<div>CAST</div>} />
            <Route path="reviews" element={<div>REVIEWS</div>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
