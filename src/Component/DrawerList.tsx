import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { TokenService } from "../State/interceptors/TokenService";

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
  const tokenService = new TokenService();

  const handleClick = (item: menuItem) => {
    if (item.name === "Logout") {
      handleLogout();
    } else {
      navigate(item.path);
      toggleDrawer();
    }
  };

  const handleLogout = () => {
    tokenService.clearToken();
    console.log("Logout successful");
    navigate("/");
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
                onClick={() => handleClick(item)}
              >
                <span
                  className={`${
                    isActive
                      ? "bg-primary-custom text-white"
                      : "bg-white text-primary-custom"
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

        <Divider />

        <div className="space-y-2">
          {menu2.map((item: menuItem, index: number) => {
            const isActive = location.pathname === item.path;

            return (
              <div
                className="pr-9 cursor-pointer"
                key={index}
                onClick={
                  item.name === "Logout"
                    ? handleLogout
                    : () => handleClick(item)
                }
              >
                <span
                  className={`${
                    item.path === location.pathname
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
