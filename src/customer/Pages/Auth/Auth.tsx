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
    <div className="flex pt-4 justify-center items-center">
      <div className="max-w-md rounded-md border  pb-4 shadow-lg">
        <img
          className="w-full rounded-t-md"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F04%2FShopping-Free-Download-PNG.png&f=1&nofb=1&ipt=e41c380009cdaa423c7a15231d70a2d1c4445a1cd5d9eea928da0a64d1384d52&ipo=images"
          alt="banner"
        />
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
