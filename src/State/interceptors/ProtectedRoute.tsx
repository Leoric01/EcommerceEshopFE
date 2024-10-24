import React from 'react';
import { Navigate } from 'react-router-dom';
import { TokenService } from './TokenService';

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const tokenService = new TokenService();
  
  if (tokenService.isTokenNotValid()) {
    return <Navigate to="/become-seller" replace />;
  }

  return children;
};

export default ProtectedRoute;