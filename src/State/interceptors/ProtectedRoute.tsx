import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { TokenService } from "./TokenService";

const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: React.ReactElement;
  allowedRoles: string[];
}) => {
  const tokenService = new TokenService();
  const userRoles = tokenService.getUserRoles();
  const isAuthorized =
    userRoles.includes("ROLE_ADMIN") ||
    allowedRoles.some((role) => userRoles.includes(role));

  if (tokenService.isTokenNotValid()) {
    return <Navigate to="/login" replace />;
  }

  if (!isAuthorized) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
