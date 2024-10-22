import { TextField, Box, Button } from "@mui/material";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid2";
import React from "react";

const PersonalDetails = () => {
  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      vat: "",
      sellerName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Personal details submitted: ", values);
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="sellerName"
              label="Seller Name"
              value={formik.values.sellerName}
              onChange={formik.handleChange}
              error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
              helperText={formik.touched.sellerName && formik.errors.sellerName}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="mobile"
              label="Mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="otp"
              label="OTP"
              value={formik.values.otp}
              onChange={formik.handleChange}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="vat"
              label="VAT"
              value={formik.values.vat}
              onChange={formik.handleChange}
              error={formik.touched.vat && Boolean(formik.errors.vat)}
              helperText={formik.touched.vat && formik.errors.vat}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              type="password"
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button type="submit" fullWidth variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default PersonalDetails;
