import { Avatar, Box } from "@mui/material";
import Grid2 from "@mui/material/Grid2/Grid2";
import Grid from "@mui/material/Grid2/Grid2";
import React from "react";

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
          <div className="space-y-2 text-left">
            <div className="">
              <p className="font-semibold text-lg">Username</p>
              <p className="font-semibold text-lg">01/01/2000T23:01:09.1982</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReviewCard;
