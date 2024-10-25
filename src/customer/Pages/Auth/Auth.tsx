import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import OtpConfirmForm from "./OtpConfirmForm";

const Auth = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const navigate = useNavigate();

  const handleRegistrationSuccess = () => {
    navigate("/login/confirm-otp");
  };

  const handleOtpConfirmed = () => {
    setIsLoginPage(true);
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
            <Route
              path="confirm-otp"
              element={<OtpConfirmForm onOtpConfirmed={handleOtpConfirmed} />}
            />
          </Routes>

          <div className="flex items-center gap-1 justify-center mt-5">
            <p>
              {isLoginPage
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Button
              onClick={() => {
                setIsLoginPage(!isLoginPage);
                if (!isLoginPage) navigate("/login");
              }}
              size="small"
            >
              {isLoginPage ? "Create account" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
