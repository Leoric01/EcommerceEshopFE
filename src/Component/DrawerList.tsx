import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type DrawerListProps = {
  menu: menuItem[];
  menu2: menuItem[];
  toggleDrawer: () => void;
};

type menuItem = {
  name: string;
  path: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
};

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
    toggleDrawer();
  };
  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r py-5">
          <div className="space-y-2">
            {menu.map((item: menuItem, index: number) => {
              const isActive = location.pathname === item.path;

              return (
                <div
                  className="pr-9 cursor-pointer"
                  key={index}
                  onClick={() => handleNavigate(item.path)}
                >
                  <span
                    className={`${
                      item.path == location.pathname
                        ? "bg-primary-custom text-white"
                        : "text-primary-custom bg-white"
                    } flex items-center px-5 py-3 rounded-r-full`}
                  >
                    <ListItemIcon>
                      {isActive ? item.activeIcon : item.icon}
                    </ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                  </span>
                </div>
              );
            })}
          </div>
          <Divider/>
          <div className="space-y-2">
            {menu2.map((item: menuItem, index: number) => {
              const isActive = location.pathname === item.path;

              return (
                <div
                  className="pr-9 cursor-pointer"
                  key={index}
                  onClick={() => handleNavigate(item.path)}
                >
                  <span
                    className={`${
                      item.path == location.pathname
                        ? "bg-primary-custom text-white"
                        : "text-primary-custom bg-white"
                    } flex items-center px-5 py-3 rounded-r-full`}
                  >
                    <ListItemIcon>
                      {isActive ? item.activeIcon : item.icon}
                    </ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
};

export default DrawerList;
