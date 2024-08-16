import { Loader } from "@mantine/core";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Home from "../features/home/routes/Home";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const App = () => {
  const user = useAuthUser()

  return (
    <Suspense
      fallback={
        <Loader />
      }
    >
      {user ?
        <Outlet />
        :
        <Navigate to="/auth/login" />
      }
    </Suspense >
  );
};


export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      { path: '*', element: <Navigate to="./home" /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="." />
  }
];
