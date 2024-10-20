import { Avatar, Box, Button, IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <>
      <Box>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div>
            <div className="flex item-center gap-2">
              <IconButton>
                <MenuIcon />
                <h1 className="logo cursor-pointer text-lg md:text-2xl text-[#ac3232]">
                  Leoric Bazaaaarr!!!
                </h1>
              </IconButton>
            </div>
          </div>
          <div className="">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {true ? (
              <Button>
                <Avatar src="https://img.freepik.com/premium-photo/logotype-goat-gaming-channel-marvel-style-goat_643382-1192.jpg?w=826" />
                Leoric
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
