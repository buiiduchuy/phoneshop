import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { isTokenValid, getUserFromToken } from './fakeAuth';

const ProtectedRoute = ({ requiredRole }) => {
  const location = useLocation();
  if (!isTokenValid()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  const user = getUserFromToken();
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/403" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
