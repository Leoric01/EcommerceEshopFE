import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const BecomeSellerFormStep1 = ({ formik }: any) => {
  return (
    <Box>
      <div className="space-y-9">
        <TextField
          fullWidth
          name="mobile"
          label="Mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />
        <TextField
          fullWidth
          name="VAT"
          label="VAT"
          value={formik.values.VAT}
          onChange={formik.handleChange}
          error={formik.touched.VAT && Boolean(formik.errors.VAT)}
          helperText={formik.touched.VAT && formik.errors.VAT}
        />
      </div>
    </Box>
  );
};

export default BecomeSellerFormStep1;
