import { TextField, Box, Button } from "@mui/material";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid2";

const BusinessDetails = () => {
  const formik = useFormik({
    initialValues: {
      businessName: "",
      businessEmail: "",
      businessMobile: "",
      logo: "",
      banner: "",
      businessAddress: "",
    },
    onSubmit: (values) => {
      console.log("Business details submitted: ", values);
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              name="businessName"
              label="Business Name"
              value={formik.values.businessName}
              onChange={formik.handleChange}
              error={formik.touched.businessName && Boolean(formik.errors.businessName)}
              helperText={formik.touched.businessName && formik.errors.businessName}
            />
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              name="businessEmail"
              label="Business Email"
              value={formik.values.businessEmail}
              onChange={formik.handleChange}
              error={formik.touched.businessEmail && Boolean(formik.errors.businessEmail)}
              helperText={formik.touched.businessEmail && formik.errors.businessEmail}
            />
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              name="businessMobile"
              label="Business Mobile"
              value={formik.values.businessMobile}
              onChange={formik.handleChange}
              error={formik.touched.businessMobile && Boolean(formik.errors.businessMobile)}
              helperText={formik.touched.businessMobile && formik.errors.businessMobile}
            />
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              name="logo"
              label="Logo URL"
              value={formik.values.logo}
              onChange={formik.handleChange}
              error={formik.touched.logo && Boolean(formik.errors.logo)}
              helperText={formik.touched.logo && formik.errors.logo}
            />
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              name="banner"
              label="Banner URL"
              value={formik.values.banner}
              onChange={formik.handleChange}
              error={formik.touched.banner && Boolean(formik.errors.banner)}
              helperText={formik.touched.banner && formik.errors.banner}
            />
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              name="businessAddress"
              label="Business Address"
              value={formik.values.businessAddress}
              onChange={formik.handleChange}
              error={formik.touched.businessAddress && Boolean(formik.errors.businessAddress)}
              helperText={formik.touched.businessAddress && formik.errors.businessAddress}
            />
          </Grid>

          <Grid size={{xs:12}}>
            <Button type="submit" fullWidth variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default BusinessDetails;
