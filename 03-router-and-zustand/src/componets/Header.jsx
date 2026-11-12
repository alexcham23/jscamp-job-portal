import { NavLink, useNavigate } from 'react-router';
import Link from './Link';
import useAuthStore from '../store/authStore';
import useFavoritesStore from '../store/favoritesStore';

const Header = () => {
  const { isLoggedIn } = useAuthStore();
  const { countFavorites } = useFavoritesStore();
  const numberOfFavorites = countFavorites();
  
  return (
    <header>
      <Link href="/" style={{ textDecoration: "none" }}>
        <h1 style={{ color: "white" }}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          DevJobsGT
        </h1>
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link-active" : "")} 
        to="/search">Empleos</NavLink>
        {
          isLoggedIn && (
            <NavLink
              className={({ isActive }) => (isActive ? "nav-link-active" : "")}
              to="/profile"
            >Profile ❤️ {numberOfFavorites}</NavLink>
          )
        }
      </nav>
      <HeaderUserButton />
    </header>
  );
};

const HeaderUserButton = () => {
  const { isLoggedIn, logout } = useAuthStore();
  const {clearFavorites} = useFavoritesStore();
  const navigate = useNavigate();
  
  // Manejador de cierre de sesión
  const handleLoguot = () => {
    logout();
    clearFavorites();
  }

  const handleLogin = () => {
    navigate('/login');
  }

  return isLoggedIn
    ? <button onClick={handleLoguot}>Cerrar sesión</button>
    : <button onClick={handleLogin}>Iniciar sesión</button>
}

export default Header;
