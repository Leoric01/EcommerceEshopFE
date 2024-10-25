import { Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import LoginForm from "./LoginForm"; // assuming LoginForm is in the same folder
import RegisterForm from "./RegisterForm";
import OtpConfirmForm from "./OtpConfirmForm";

const Auth = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const navigate = useNavigate();

  const handleRegistrationSuccess = () => {
    // After registration, navigate to confirm OTP route
    navigate("/login/confirm-otp");
  };

  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="max-w-md h-[85vh] rounded-md border shadow-lg">
        <img className="w-full rounded-t-md" src="/login_banner.png" alt="" />
        <div className="mt-8 px-10">
          <Routes>
            <Route
              path="/"
              element={
                isLoginPage ? (
                  <LoginForm />
                ) : (
                  <RegisterForm onRegisterSuccess={handleRegistrationSuccess} />
                )
              }
            />
            <Route path="confirm-otp" element={<OtpConfirmForm />} />
          </Routes>

          <div className="flex items-center gap-1 justify-center mt-5">
            <p>
              {isLoginPage
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Button onClick={() => setIsLoginPage(!isLoginPage)} size="small">
              {isLoginPage ? "Create account" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
