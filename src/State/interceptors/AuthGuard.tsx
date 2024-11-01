import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TokenService } from "./TokenService";

export const useAuthGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tokenService = new TokenService();
  const isAuthenticated = !tokenService.isTokenNotValid();
  const isPublicRoute = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    if (!isLoginPage && !isAuthenticated && !isPublicRoute) {
      navigate("/login");
    }
  }, [
    navigate,
    isAuthenticated,
    isLoginPage,
    isPublicRoute,
    location.pathname,
  ]);
};
