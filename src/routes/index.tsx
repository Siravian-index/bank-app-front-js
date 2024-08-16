
import { Navigate, useRoutes } from 'react-router-dom';


import { publicRoutes } from './public';
// import { protectedRoutes } from './private';

function AppRoutes() {

  const commonRoutes = [
    { path: '/', element: <Navigate to="/auth/register" replace /> },
    { path: '*', element: <Navigate to="/" replace /> },
  ];


  const element = useRoutes([...publicRoutes, ...commonRoutes]);

  return <>{element}</>;
}


export default AppRoutes