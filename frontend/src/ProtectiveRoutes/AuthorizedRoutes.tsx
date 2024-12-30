import { Outlet, Navigate } from "react-router-dom";
import cookies from 'js-cookie';
import { useState, useEffect, useContext } from "react";



const user = cookies.get('Token');

const UnauthorizedRoute = () => {
  return user ? <Navigate to="/todo" /> : <Outlet />;
};


export const AuthorizedRoute = () => {
  return !user ? <Navigate to="/" /> : <Outlet />;
};

export default UnauthorizedRoute;



