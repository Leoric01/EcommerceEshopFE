import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  CircularProgress,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { uploadToCloudinary } from "../../../Util/UploadToCloudinary";
import Grid from "@mui/material/Grid2/Grid2";
import { AddPhotoAlternate } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../../Data/filter/Color";
import { mainCategory } from "../../../Data/MainCategory";
import { MenLevelTwo } from "../../../Data/leveltwo/MenLevelTwo";
import { MenLevelThree } from "../../../Data/levelthree/MenLevelThree";
import { WomenLevelTwo } from "../../../Data/leveltwo/WomenLevelTwo";
import { WomenLevelThree } from "../../../Data/levelthree/WomenLevelThree";
import { HomeFurnitureLevelTwo } from "../../../Data/leveltwo/HomeFurnitureLevelTwo";
import { HomeFurnitureLevelThree } from "../../../Data/levelthree/HomeFurnitureLevelThree";
import { ElectronicsLevelTwo } from "../../../Data/leveltwo/ElectronicsLevelTwo";
import { ElectronicsLevelThree } from "../../../Data/levelthree/ElectronicsLevelThree";
import { sellerProductApi } from "../../../State/confaxios/sellerProductApi";

const AddProduct = () => {
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(5, "Title should be at least 5 characters long")
      .required("Title is required"),
    description: Yup.string()
      .min(10, "Description should be at least 10 characters long")
      .required("Description is required"),
    mrpPrice: Yup.number()
      .positive("Price should be greater than zero")
      .required("Price is required"),
    sellingPrice: Yup.number()
      .positive("Selling Price should be greater than zero")
      .required("Selling Price is required"),
    color: Yup.string().required("Color is required"),
  });
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploadImage, setUploadingImage] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: 0,
      sellingPrice: 0,
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },
    onSubmit: async (values) => {
      const formValues = { ...values, images: imageUrls };
      const response = await sellerProductApi.createProduct(values);
      console.log("Form submitted with values: ", formValues);
    },
  });

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUploadingImage(true);
    const files = event.target.files;
    if (files) {
      const urls: any[] = [];
      for (const file of Array.from(files)) {
        const uploadedUrl = await uploadToCloudinary(file);
        if (uploadedUrl) {
          urls.push(uploadedUrl);
        }
      }
      console.log("Uploaded URLs:", urls);
      setImageUrls((prev) => [...prev, ...urls]);
      formik.setFieldValue("images", [...formik.values.images, ...urls]);
    }
    setUploadingImage(false);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid className="flex flex-wrap gap-5 items-start" size={{ xs: 12 }}>
            <InputLabel htmlFor="fileInput" className="relative flex-grow-0">
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                multiple
                onChange={handleImageChange}
              />
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 rounded-md hover:border-primary-custom border">
                <AddPhotoAlternate className="text-gray-600" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                  <CircularProgress />
                </div>
              )}
            </InputLabel>

            {formik.values.images.length > 0 ? (
              formik.values.images.map((image, index) => (
                <div key={index} className="relative flex-grow-0">
                  <img
                    className="w-24 h-24 object-cover"
                    src={image}
                    alt={`Product image ${index + 1}`}
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      outline: 0,
                    }}
                  >
                    <CloseIcon sx={{ fontSize: "1rem", color: "gray" }} />
                  </IconButton>
                </div>
              ))
            ) : (
              <div>
                <p>No images to display</p>
              </div>
            )}
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && Boolean(formik.errors.title)}
              required
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              required
              multiline
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && Boolean(formik.errors.description)
              }
              rows={4}
            />
          </Grid>

          <Grid size={{ xs: 6, md: 3, lg: 3 }}>
            <TextField
              fullWidth
              id="mrp_price"
              label="MRP Price"
              name="mrpPrice"
              type="number"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
              helperText={
                formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)
              }
              required
            />
          </Grid>

          <Grid size={{ xs: 6, md: 3, lg: 3 }}>
            <TextField
              fullWidth
              id="sellingPrice"
              label="Selling Price"
              name="sellingPrice"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              error={
                formik.touched.sellingPrice &&
                Boolean(formik.errors.sellingPrice)
              }
              helperText={
                formik.touched.sellingPrice &&
                Boolean(formik.errors.sellingPrice)
              }
              required
            />
          </Grid>

          <Grid size={{ xs: 6, md: 3, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.color && Boolean(formik.errors.color)}
              required
            >
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                label="Color"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Colors.map((color, index) => (
                  <MenuItem key={index} value={color.name}>
                    <div className="flex gap-3">
                      <span
                        style={{ backgroundColor: color.hex }}
                        className={`h-5 w-5 rounded-full ${
                          color.name === "White" ? "border" : ""
                        }`}
                      ></span>
                      <p>{color.name}</p>
                    </div>
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.color && formik.errors.color && (
                <FormHelperText>{formik.errors.color}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 6, md: 3, lg: 3 }}>
            <TextField
              fullWidth
              label="Sizes (Comma Separated)"
              name="sizes"
              value={formik.values.sizes}
              onChange={formik.handleChange}
              error={formik.touched.sizes && Boolean(formik.errors.sizes)}
              helperText={formik.touched.sizes && Boolean(formik.errors.sizes)}
            />
          </Grid>

          <Grid size={{ xs: 4 }}>
            <TextField
              fullWidth
              label="Category Level 1"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={
                formik.touched.category && Boolean(formik.errors.category)
              }
              required
            />
          </Grid>

          <Grid size={{ xs: 4 }}>
            <TextField
              fullWidth
              label="Category Level 2"
              name="category2"
              value={formik.values.category2}
              onChange={formik.handleChange}
              error={
                formik.touched.category2 && Boolean(formik.errors.category2)
              }
              helperText={
                formik.touched.category2 && Boolean(formik.errors.category2)
              }
            />
          </Grid>

          <Grid size={{ xs: 4 }}>
            <TextField
              fullWidth
              label="Category Level 3"
              name="category3"
              value={formik.values.category3}
              onChange={formik.handleChange}
              error={
                formik.touched.category3 && Boolean(formik.errors.category3)
              }
              helperText={
                formik.touched.category3 && Boolean(formik.errors.category3)
              }
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{ padding: "15px" }}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProduct;
