import { useEffect, useState } from "react";
import AdminRoutes from "../../../Routes/AdminRoutes";
import AdminDrawerList from "../../Component/AdminDrawerList";
import Navbar from "../../../admin seller/components/navbar/Navbar";
import { Alert, Snackbar, useMediaQuery } from "@mui/material";

const AdminDashboard = () => {
  const [snackbarOpen, setOpenSnackbar] = useState(false);
  const [deal, setDeal] = useState({ dealCreated: false, dealUpdated: false, error: "" });
  const [admin, setAdmin] = useState({ categoryUpdated: false });
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const isLargeScreen = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  useEffect(() => {
    if (deal.dealCreated || deal.dealUpdated || deal.error || admin.categoryUpdated) {
      setOpenSnackbar(true);
    }
  }, [deal.dealCreated, deal.dealUpdated, deal.error, admin.categoryUpdated]);

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {isLargeScreen ? (
          <div className="h-full lg:w-[20%]">
            <AdminDrawerList />
          </div>
        ) : (
          <Navbar DrawerList={AdminDrawerList} />
        )}
        <section className="flex-1 lg:h-[90vh] overflow-y-auto">
          <div className="p-10 w-full">
            <AdminRoutes />
          </div>
        </section>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={deal.error ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {deal.error || "Operation successful"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AdminDashboard;
