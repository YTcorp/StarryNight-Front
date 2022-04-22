import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import authContext from '../../contexts/AuthContext';

const UnauthenticatedRoute = ({
  redirectPath = '/',
  children,
}) => {
  const { isConnected } = useContext(authContext);

  if (isConnected) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default UnauthenticatedRoute;