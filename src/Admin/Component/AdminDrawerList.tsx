import React from "react";
import DrawerList from "../../Component/DrawerList";
import { menu, menu2 } from "../../Data/endpoints/AdminNavbar";

type menuItem = {
  name: string;
  path: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
};



const AdminDrawerList = ({toggleDrawer}:any) => {
  return (
    <div>
      <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer}/>
    </div>
  );
};

export default AdminDrawerList;
