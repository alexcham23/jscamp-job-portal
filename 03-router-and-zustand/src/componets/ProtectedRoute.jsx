import { Navigate } from 'react-router';
import useAuthStore  from '../store/authStore';

const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
    const { isLoggedIn } = useAuthStore();

    // verifica si el usuario está autenticado
    if (!isLoggedIn) {
        // redirige al usuario a la página de inicio de sesión si no está autenticado
        return <Navigate to={redirectTo} />;
    }

    // renderiza los hijos si el usuario está autenticado
    return children;
}

export default ProtectedRoute;