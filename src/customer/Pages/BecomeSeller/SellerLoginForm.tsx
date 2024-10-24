import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup
import React from "react";
import { sendLoginSignup } from "../../../State/AuthSlice";
import { useAppDispatch } from "../../../State/Store";

const SellerLoginForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address") 
        .required("Email is required"), 
      password: Yup.string()
        .min(4, "Password must be at least 4 characters") 
        .required("Password is required"), 
    }),
    onSubmit: (values) => {
      console.log(values, "formik login submitted");
      dispatch(sendLoginSignup(values))
      .unwrap()
      .then((token: any) => {
        console.log("Logged in successfully with token:", token);
      })
      .catch((error: any) => {
        console.error("Login failed:", error);
      });
      
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-xl font-bold text-center text-primary-custom pb-5">
        Login as Seller
      </h1>
      <div className="space-y-5">
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <div className="space-y-2">
          <p className="font-medium text-sm opacity-45">Enter password</p>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="password"
            type="password" 
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <Button fullWidth variant="contained" type="submit" sx={{ py: "11px" }}>
          Login
        </Button>
      </div>
    </form>
  );
};

export default SellerLoginForm;
