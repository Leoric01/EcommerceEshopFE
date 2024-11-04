import React from "react";
import Menu from "@mui/icons-material/Menu";
import { Drawer, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { teal } from "@mui/material/colors";

const Navbar = ({ DrawerList }: any) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: any) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="h-[10vh] flex items-center px-5 border-b">
      <div className="flex items-center gap-3 ">
        <IconButton onClick={toggleDrawer(true)}>
          <Menu color="primary" />
        </IconButton>

        <h1 onClick={() => navigate("/")} className="logo text-xl cursor-pointer">
          AdminNavbar
        </h1>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default Navbar;
