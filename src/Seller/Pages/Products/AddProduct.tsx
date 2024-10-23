import React, { useState } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  InputLabel,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { uploadToCloudinary } from "../../../Util/UploadToCloudinary";
import Grid from "@mui/material/Grid2/Grid2";
import { AddPhotoAlternate } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

const AddProduct = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploadImage, setUploadingImage] = useState(false);
  const [snackbarOpen, setOpenSnackBar] = useState(false);

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
          <Grid className="flex flex-wrap gap-5 " size={{ xs: 12 }}>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              multiple
              onChange={handleImageChange}
            />
            <InputLabel htmlFor="fileInput" className="relative">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 rounded-md hover:border-primary-custom border">
                <AddPhotoAlternate className="text-gray-600" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                  <CircularProgress />
                </div>
              )}
            </InputLabel>

            <div className="flex flex-wrap gap-2">
              {formik.values.images.length > 0 ? (
                formik.values.images.map((image, index) => (
                  <div key={index} className="relative">
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
                <p>No images to display</p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              required
              multiline
              rows={4}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="MRP Price"
              name="mrpPrice"
              type="number"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              required
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Selling Price"
              name="sellingPrice"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={formik.values.color}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{ xs: 4 }}>
            <TextField
              fullWidth
              label="Category Level 1"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
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
              required
            />
          </Grid>

          <Grid size={{ xs: 4 }}>
            <TextField
              fullWidth
              label="Category Level 3"
              name="category3"
              value={formik.values.category3}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Sizes (Comma Separated)"
              name="sizes"
              value={formik.values.sizes}
              onChange={formik.handleChange}
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button fullWidth variant="contained" type="submit">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProduct;
