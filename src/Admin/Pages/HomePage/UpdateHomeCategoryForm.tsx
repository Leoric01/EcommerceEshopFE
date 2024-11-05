import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Box,
  FormHelperText,
} from "@mui/material";
import { mainCategory } from "../../../Data/MainCategory";
import { MenLevelTwo } from "../../../Data/leveltwo/MenLevelTwo";
import { WomenLevelTwo } from "../../../Data/leveltwo/WomenLevelTwo";
import { MenLevelThree } from "../../../Data/levelthree/MenLevelThree";
import { WomenLevelThree } from "../../../Data/levelthree/WomenLevelThree";
import { HomeFurnitureLevelThree } from "../../../Data/levelthree/HomeFurnitureLevelThree";
import { ElectronicsLevelThree } from "../../../Data/levelthree/ElectronicsLevelThree";
import { HomeFurnitureLevelTwo } from "../../../Data/leveltwo/HomeFurnitureLevelTwo";
import { ElectronicsLevelTwo } from "../../../Data/leveltwo/ElectronicsLevelTwo";
import { homeApi } from "../../../State/configAxios/homeApi";
import { HomeCategory as HomeCategoryInterface } from "../../../Api/models";

// Define validation schema using Yup
const validationSchema = Yup.object({
  image: Yup.string().required("Image is required"),
  category: Yup.string().required("Category is required"),
});

const categoryTwo: { [key: string]: any[] } = {
  men: MenLevelTwo,
  women: WomenLevelTwo,
  home_furniture: HomeFurnitureLevelTwo,
  beauty: [],
  electronics: ElectronicsLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  men: MenLevelThree,
  women: WomenLevelThree,
  home_furniture: HomeFurnitureLevelThree,
  beauty: [],
  electronics: ElectronicsLevelThree,
};
const UpdateHomeCategoryForm = ({
  category,
  handleClose,
}: {
  category: HomeCategoryInterface | undefined;
  handleClose: () => void;
}) => {
  const updateHomeCategory = async (id: number, homeCategory: HomeCategoryInterface) => {
    try {
      const response = await homeApi.updateHomeCategory(id, homeCategory);
      console.log("Updated category: ", response.data);
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      image: "",
      category: "",
      category2: "",
      category3: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values, category);
      if (category?.id) {
        updateHomeCategory(category.id, { image: values.image, categoryId: values.category3 });
      }
      handleClose();
    },
  });

  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter((child: any) => {
      return child.parentCategoryId == parentCategoryId;
    });
  };
  homeApi.updateHomeCategory(1, { image: "", categoryId: "1" });
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ maxWidth: 500, margin: "auto", padding: 3 }}
      className="space-y-6"
    >
      <Typography variant="h4" gutterBottom>
        Update Category
      </Typography>

      <TextField
        fullWidth
        id="image"
        name="image"
        label="Image URL"
        value={formik.values.image}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.image && Boolean(formik.errors.image)}
        helperText={formik.touched.image && formik.errors.image}
      />

      <FormControl fullWidth error={formik.touched.category && Boolean(formik.errors.category)} required>
        <InputLabel id="category-label">Category2</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          label="Category2"
        >
          {mainCategory.map((item) => (
            <MenuItem value={item.categoryId}>{item.name}</MenuItem>
          ))}
        </Select>
        {formik.touched.category && formik.errors.category && <FormHelperText>{formik.errors.category}</FormHelperText>}
      </FormControl>

      <FormControl fullWidth error={formik.touched.category && Boolean(formik.errors.category)} required>
        <InputLabel id="category2-label">Second Category</InputLabel>
        <Select
          labelId="category2-label"
          id="category2"
          name="category2"
          value={formik.values.category2}
          onChange={formik.handleChange}
          label="Second Category"
        >
          {formik.values.category &&
            categoryTwo[formik.values.category]?.map((item) => (
              <MenuItem value={item.categoryId}>{item.name}</MenuItem>
            ))}
        </Select>
        {formik.touched.category && formik.errors.category && <FormHelperText>{formik.errors.category}</FormHelperText>}
      </FormControl>
      <FormControl fullWidth error={formik.touched.category && Boolean(formik.errors.category)} required>
        <InputLabel id="category-label">Third Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          name="category3"
          value={formik.values.category3}
          onChange={formik.handleChange}
          label="Third Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {formik.values.category2 &&
            childCategory(categoryThree[formik.values.category], formik.values.category2)?.map((item: any) => (
              <MenuItem value={item.categoryId}>{item.name}</MenuItem>
            ))}
        </Select>
        {formik.touched.category && formik.errors.category && <FormHelperText>{formik.errors.category}</FormHelperText>}
      </FormControl>
      <Button color="primary" variant="contained" fullWidth type="submit" sx={{ py: ".9rem" }}>
        Submit
      </Button>
    </Box>
  );
};

export default UpdateHomeCategoryForm;
