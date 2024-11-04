import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import { Rating, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2/Grid2";
import { Review } from "../../../Api/models";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import { TokenService } from "../../../State/interceptors/TokenService";
import { User as UserInterface } from "../../../Api/models";
import { userApi } from "../../../State/interceptors/userApi";
interface ProductReviewCardProps {
  item: Review;
}

const ProductReviewCard = ({ item }: ProductReviewCardProps) => {
  const [value, setValue] = React.useState(4.5);
  const tokenService = new TokenService();
  const [user, setUser] = useState<UserInterface | null>(null);

  const fetchUser = async () => {
    try {
      const response = await userApi.getUserProfile();
      const fetchedUser = response?.data?.data;
      console.log("User fetched:", response);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };
  const handleDeleteReview = () => {};

  return (
    <div className="flex justify-between">
      <Grid container spacing={2} gap={3}>
        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt={item.user.name}
              src=""
            >
              {item?.user?.name?.[0].toUpperCase()}
            </Avatar>
          </Box>
        </Grid>
        <Grid size={{ xs: 9 }}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">{item.user.name}</p>
              <p className="opacity-70">{item.createdAt}</p>
            </div>
            <div>
              <Rating
                readOnly
                value={item.rating}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
            </div>
            <p>{item.reviewText}</p>
            <div>
              {item.productImages?.map((image) => (
                <img
                  key={image}
                  className="w-24 h-24 object-cover"
                  src={image}
                  alt=""
                />
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
      {user && item.user.id === user?.id && (
        <div className="">
          <IconButton onClick={handleDeleteReview}>
            <DeleteIcon sx={{ color: red[700] }} />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default ProductReviewCard;
