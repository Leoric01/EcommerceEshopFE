import { Delete } from "@mui/icons-material";
import { Avatar, Box, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid2/Grid2";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid container spacing={10}>
        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              A
            </Avatar>
          </Box>
        </Grid>
        <Grid size={{ xs: 9 }}>
          <div className="flex-col justify-items-start  text-left">
            <div className="">
              <p className="font-bold text-lg">Username</p>
              <p className="opacity-70">01/01/2000 23:01:09</p>
            </div>
            <Rating className="" readOnly value={4.5} precision={0.5} />
            <p>Value for money product</p>
          </div>
          <div>
            <img
              className="w-20 h-20 object-cover"
              src="https://images.pexels.com/photos/1320998/pexels-photo-1320998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="lemonade"
            />
          </div>
        </Grid>
      </Grid>
      <IconButton>
        <Delete sx={{ color: red[700] }} />
      </IconButton>
    </div>
  );
};

export default ReviewCard;
