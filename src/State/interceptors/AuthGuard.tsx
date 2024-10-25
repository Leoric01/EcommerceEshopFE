import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TokenService } from "./TokenService";

export const useAuthGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tokenService = new TokenService();

  const protectedRoutes = [
    "/account",
    "/seller",
    "/admin",
    "/cart",
    "/checkout",
  ];

  useEffect(() => {
    const currentPath = location.pathname;

    const isProtectedRoute = protectedRoutes.some((route) =>
      currentPath.startsWith(route)
    );

    if (isProtectedRoute && tokenService.isTokenNotValid()) {
      navigate("/login");
    }
  }, [navigate, location, tokenService]);
};
