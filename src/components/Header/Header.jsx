import css from './Header.module.css';
import { NavLink, Outlet } from 'react-router-dom';

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
      <Outlet />
    </>
  );
};

export default Header;
