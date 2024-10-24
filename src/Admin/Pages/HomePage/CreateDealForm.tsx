import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormik } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Grid from "@mui/material/Grid2/Grid2";
import dayjs from "dayjs";
import { mainCategory } from "../../../Data/MainCategory";

const CreateDealForm = () => {
  const formik = useFormik({
    initialValues: {
      category: "",
      discount: 0,
    },
    onSubmit: (values) => {
      console.log("Form submitted with values: ", values);
    },
  });

  return (
    <div className="">
      <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        sx={{ mt: 3 }}
        className="space-y-6"
      >
        <Typography variant="h4" className="text-center text-primary-custom ">
          Create New Deal
        </Typography>
        <Grid container spacing={2}>
          {/* Discount */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="discount"
              name="discount"
              type="number"
              label="Discount"
              value={formik.values.discount}
              onChange={formik.handleChange}
              error={formik.touched.discount && Boolean(formik.errors.discount)}
              helperText={formik.touched.discount && formik.errors.discount}
              required
            />
          </Grid>

          {/* Category */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formik.values.category}
                label="Category"
                onChange={formik.handleChange}
              >
                {mainCategory.map((item) => (
                  <MenuItem key={item.categoryId} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              color="primary"
              sx={{ py: ".8rem" }}
              variant="contained"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CreateDealForm;
