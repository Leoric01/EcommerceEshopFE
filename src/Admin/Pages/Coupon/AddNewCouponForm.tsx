import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2/Grid2";
import dayjs from "dayjs";

const AddNewCouponForm = () => {
  const formik = useFormik({
    initialValues: {
      code: "",
      discountPercentage: 0,
      validityStartDate: "",
      validityEndDate: "",
      minimumOrderValue: 0,
    },
    onSubmit: (values) => {
      console.log("Form submitted with values: ", values);

      const isValidDate = (dateString: string) => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
          console.log(`Invalid date format: ${dateString}`);
          return false;
        }
        return true;
      };
      const formatedValues = {
        ...values,
        validityStartDate: isValidDate(values.validityStartDate)
          ? new Date(values.validityStartDate).toISOString()
          : null,
        validityEndDate: isValidDate(values.validityEndDate)
          ? new Date(values.validityEndDate).toISOString()
          : null,
      };

      console.log("Formatted Values: ", values, formatedValues);
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary-custom pb-5 text-center"> Create New Coupon</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component={"form"} onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                id="code"
                label="Coupon Code"
                name="code"
                value={formik.values.code}
                onChange={formik.handleChange}
                error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code}
                required
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                id="discountPercentage"
                name="discountPercentage"
                label="Discount Percentage"
                type="number"
                value={formik.values.discountPercentage}
                onChange={formik.handleChange}
                error={
                  formik.touched.discountPercentage &&
                  Boolean(formik.errors.discountPercentage)
                }
                helperText={
                  formik.touched.discountPercentage &&
                  formik.errors.discountPercentage
                }
                required
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Validity Start Date"
                name="validityStartDate"
                value={
                  formik.values.validityStartDate
                    ? dayjs(formik.values.validityStartDate)
                    : null
                }
                onChange={(newValue) =>
                  formik.setFieldValue("validityStartDate", newValue)
                }
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Validity End Date"
                name="validityEndDate"
                value={
                  formik.values.validityEndDate
                    ? dayjs(formik.values.validityEndDate)
                    : null
                }
                onChange={(newValue) =>
                  formik.setFieldValue("validityEndDate", newValue)
                }
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                id="minimumOrderValue"
                label="Minimum Order Value"
                name="minimumOrderValue"
                type="number"
                value={formik.values.minimumOrderValue}
                onChange={formik.handleChange}
                error={
                  formik.touched.minimumOrderValue &&
                  Boolean(formik.errors.minimumOrderValue)
                }
                helperText={
                  formik.touched.minimumOrderValue &&
                  formik.errors.minimumOrderValue
                }
                required
              />
            </Grid>

            <Grid size={{ xs: 12}}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                sx={{py:".9rem"}}
              >
                Add Coupon
              </Button>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default AddNewCouponForm;
