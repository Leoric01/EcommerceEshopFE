import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, TextField, Button, InputLabel } from "@mui/material";
import { uploadToCloudinary } from "../../../Util/UploadToCloudinary";
import Grid from "@mui/material/Grid2/Grid2";

const AddProduct = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const urls: any[] = [];
      for (const file of Array.from(files)) {
        const uploadedUrl = await uploadToCloudinary(file);
        if (uploadedUrl) urls.push(uploadedUrl);
      }
      setImageUrls((prev) => [...prev, ...urls]);
    }
  };

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

  return (
    <Box className="p-5">
      <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              label="Product Title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{xs:12}}>
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
          <Grid size={{xs:6}}>
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
          <Grid size={{xs:6}}>
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
          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={formik.values.color}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{xs:4}}>
            <TextField
              fullWidth
              label="Category Level 1"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{xs:4}}>
            <TextField
              fullWidth
              label="Category Level 2"
              name="category2"
              value={formik.values.category2}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{xs:4}}>
            <TextField
              fullWidth
              label="Category Level 3"
              name="category3"
              value={formik.values.category3}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              label="Sizes (Comma Separated)"
              name="sizes"
              value={formik.values.sizes}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{xs:12}}>
            <InputLabel htmlFor="imageUpload">Upload Images</InputLabel>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
            <Box mt={2}>
              {imageUrls.length > 0 &&
                imageUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Uploaded ${index + 1}`}
                    style={{ width: "100px", height: "100px", marginRight: "10px" }}
                  />
                ))}
            </Box>
          </Grid>
          <Grid size={{xs:12}}>
            <Button fullWidth variant="contained" type="submit">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddProduct;
