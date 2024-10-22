import React, { useState } from "react";
import SellerAccountForm from "./SellerAccountForm";
import SellerLoginForm from "./SellerLoginForm";
import Button from "@mui/material/Button";

const BecomeSeller = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleShowPage = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="grid mg:gap-10 grid-cols-3 min-h-screen">
      <section className="lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-mb">
        {isLogin ? <SellerLoginForm /> : <SellerAccountForm />}
        <div className="mt-10 space-y-2">
          <h1 className="text-center text-sm font-medium">
            {isLogin ? "Don't have account yet ?" : "Have account ?"}
          </h1>
          <Button
            onClick={handleShowPage}
            fullWidth
            sx={{ py: "11px" }}
            variant="outlined"
          >
            {isLogin ? "Register" : "Login"}
          </Button>
        </div>
      </section>
      <section className="hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-top mt-10">
        <div className="lg:w-[70%] px-5 space-y-10">
          <div className="space-y-2 font-bold text-center">
            <p className="text-2xl">Join the Marketplace</p>
            <p className="text-lg text-primary-custom">
              Boost your sales today
            </p>
          </div>
          <img
            src="https://1.bp.blogspot.com/-fKj_J-zcyZQ/YBDo384UEnI/AAAAAAAABRs/GtZIcHLvLaEGa4FT4CwXI4GP1Gh3eBPjACLcBGAsYHQ/w1200-h630-p-k-no-nu/real%2Bestate%2Bagent03.jpg"
            alt="new deal"
          />
        </div>
      </section>
    </div>
  );
};

export default BecomeSeller;
