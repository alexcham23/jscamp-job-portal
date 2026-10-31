import {useRouter} from '../hooks/useRouter'

const Router = ({ path, component: Component }) => {
  const { currentPath } = useRouter();
  if (currentPath !== path) return null;
  return <Component />;
}

export default Router;