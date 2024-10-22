import { TextField, Box, Button } from "@mui/material";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid2";

const BankDetails = () => {
  const formik = useFormik({
    initialValues: {
      accountNumber: "",
      isfcCode: "",
      accountHolderName: "",
    },
    onSubmit: (values) => {
      console.log("Bank details submitted: ", values);
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Account Holder Name */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="accountHolderName"
              label="Account Holder Name"
              value={formik.values.accountHolderName}
              onChange={formik.handleChange}
              error={
                formik.touched.accountHolderName &&
                Boolean(formik.errors.accountHolderName)
              }
              helperText={
                formik.touched.accountHolderName && formik.errors.accountHolderName
              }
            />
          </Grid>

          {/* Account Number */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="accountNumber"
              label="Account Number"
              value={formik.values.accountNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.accountNumber &&
                Boolean(formik.errors.accountNumber)
              }
              helperText={
                formik.touched.accountNumber && formik.errors.accountNumber
              }
            />
          </Grid>

          {/* ISFC Code */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="isfcCode"
              label="ISFC Code"
              value={formik.values.isfcCode}
              onChange={formik.handleChange}
              error={formik.touched.isfcCode && Boolean(formik.errors.isfcCode)}
              helperText={formik.touched.isfcCode && formik.errors.isfcCode}
            />
          </Grid>

          {/* Submit Button */}
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

export default BankDetails;
