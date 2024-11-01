import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TokenService } from "./TokenService";

export const useAuthGuard = () => {
  const navigate = useNavigate();
  const tokenService = new TokenService();

  useEffect(() => {
    if (tokenService.isTokenNotValid()) {
      navigate("/login");
    }
  }, [navigate, tokenService]);
};
