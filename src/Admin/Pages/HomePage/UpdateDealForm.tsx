import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Deal as DealInterface, HomeCategory as HomeCategoryInterface } from "../../../Api/models";
import { dealApi } from "../../../State/configAxios/dealApi";
import { customerApi } from "../../../State/configAxios/customerApi";

// Validation schema using Yup
const validationSchema = Yup.object({
  discount: Yup.number()
    .required("Discount is required")
    .min(0, "Discount must be a positive number")
    .max(100, "Discount cannot exceed 100"),
  category: Yup.string(),
});

// Initial form values
const initialValues = {
  discount: 0,
  category: "",
};

const UpdateDealForm = ({ id, onClose, onRefresh }: { id: number; onClose: () => void; onRefresh: () => void }) => {
  const [homeCategories, setCategories] = useState<HomeCategoryInterface[]>([]);

  const fetchHomeCategories = async () => {
    try {
      const response = await customerApi.createHomeCategories(homeCategories);
      setCategories(response.data.dealCategories || []);
      console.log("Categories: ", response.data.dealCategories);
    } catch (error) {
      console.log(error);
    }
  };

  const updateDeal = async (deal: DealInterface) => {
    try {
      if (deal.id !== undefined) {
        const response = await dealApi.createDeal1(deal.id, deal);
        console.log("Updated deal: ", response.data);
        onClose();
        onRefresh();
      } else {
        console.error("Deal ID is undefined");
      }
    } catch (error) {
      console.error("Error updating deal:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Deal submit", values);
      updateDeal({
        id,
        discount: values.discount,
        category: { id: Number(values.category) },
      });
    },
  });

  useEffect(() => {
    fetchHomeCategories();
  }, []);

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      <Typography align="center" variant="h4" gutterBottom>
        Update Deal
      </Typography>

      <TextField
        fullWidth
        id="discount"
        name="discount"
        label="Discount"
        type="number"
        value={formik.values.discount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={formik.touched.discount && formik.errors.discount}
      />

      <TextField
        select
        fullWidth
        id="category"
        name="category"
        label="Select Category"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value=""></option>
        {homeCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.categoryId}
          </option>
        ))}
      </TextField>

      <Button sx={{ py: ".8rem" }} color="primary" variant="contained" fullWidth type="submit">
        Update Deal
      </Button>
    </form>
  );
};

export default UpdateDealForm;
