import React from "react";
import AdminRoutes from "../../../Routes/AdminRoutes";
import AdminDrawerList from "../../Component/AdminDrawerList";

const AdminDashboard = () => {
  const toggleDrawer = () => {};

  return (
    <div className="lg:flex lg:min-h-screen">
      <section className="hidden lg:block h-full lg:w-[30%]">
        <AdminDrawerList toggleDrawer={toggleDrawer} />
      </section>
      <section className="p-10 w-full lg:w-[70%]">
        <AdminRoutes />
      </section>
    </div>
  );
};

export default AdminDashboard;
