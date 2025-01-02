import { Outlet, Navigate } from "react-router-dom";
import cookies from 'js-cookie';




const useAuth = () => {
  const user = cookies.get('Token');
  return user;
};

const UnauthorizedRoute = () => {
  const user = useAuth();
  return user ? <Navigate to="/todo" /> : <Outlet />;
};

export const AuthorizedRoute = () => {
  const user = useAuth();
  return !user ? <Navigate to="/" /> : <Outlet />;
};

export default UnauthorizedRoute;