import { Suspense } from 'react';
import css from './Header.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Header = () => {
  const setActive = ({ isActive }) => (isActive ? css.active : '');

  return (
    <>
      <nav className={css.navpanel}>
        <NavLink className={setActive} to={'/'}>
          Home
        </NavLink>
        <NavLink className={setActive} to={'/movies'}>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
