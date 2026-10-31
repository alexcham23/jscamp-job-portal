import { useNavigate, useLocation } from 'react-router';

const useRouter = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = (path) => {
        navigate(path);
    }

    return { currentPath: location.pathname, navigateTo };
}

export {useRouter};