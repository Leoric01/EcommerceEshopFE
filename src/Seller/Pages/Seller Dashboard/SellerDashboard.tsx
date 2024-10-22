import React from "react";
import SellerDrawerList from "../../Components/Seller Drawer/SellerDrawerList";
import SellerRoutes from "../../../Routes/SellerRoutes";

const SellerDashboard = () => {
  const toggleDrawer = () => {};

  return (
    <div>
      <div className="lg:flex lg:min-h-screen"> 
        <section className="hidden lg:block h-full lg:w-[30%]">
          <SellerDrawerList toggleDrawer={toggleDrawer} />
        </section>
        <section className="p-10 w-full lg:w-[70%]">
          <SellerRoutes />
        </section>
      </div>
    </div>
  );
};

export default SellerDashboard;
