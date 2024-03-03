import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <>
      <nav className={css.navpanel}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/movies'}>Movie</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
