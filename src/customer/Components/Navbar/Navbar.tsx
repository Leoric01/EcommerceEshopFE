import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../Data/MainCategory";
import { useNavigate } from "react-router-dom";
import { TokenService } from "../../../State/interceptors/TokenService";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const tokenService = new TokenService();
  const role = tokenService.getUserRoles();
  const handleAccountClick = () => {
    if (role.includes("ROLE_USER")) {
      navigate("/account/orders");
    } else if (role.includes("ROLE_SELLER")) {
      navigate("/seller");
    } else {
      console.log("No valid role assigned");
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const isLoggedIn = role.includes("ROLE_USER") || role.includes("ROLE_SELLER");

  return (
    <>
      <Box sx={{ zIndex: 2 }} className="sticky top-0 left-0 right-0 bg-white">
        <div className="flex items-center justify-between px-5 lg:px-5 h-[70px] border-b">
          <div className="flex item-center gap-1">
            <div className="flex items-center gap-2">
              <IconButton onClick={() => navigate("/")}>
                {!isLarge && <MenuIcon />}
                <h1 className="logo cursor-pointer text-lg md:text-2xl">
                  ShopAlley
                </h1>
              </IconButton>
            </div>
            <ul className="flex items-center font-medium text-gray-800 gap-2">
              {mainCategory.map((item) => (
                <li
                  key={item.categoryId}
                  onMouseLeave={() => setShowCategorySheet(false)}
                  onMouseEnter={() => {
                    setShowCategorySheet(true);
                    setSelectedCategory(item.categoryId);
                  }}
                  className="mainCategory hover:text-primary-custom hover:border-b-2 h-[70px] px-4 border-primary-custom flex items-center"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {isLoggedIn ? (
              <Button
                onClick={handleAccountClick}
                className="flex items-center gap-2"
              >
                <Avatar
                  sx={{ width: 49, height: 49 }}
                  src="https://img.freepik.com/premium-photo/logotype-goat-gaming-channel-marvel-style-goat_643382-1192.jpg?w=826"
                />
                <h1 className="font-semibold hidden lg:block">Leoric</h1>
              </Button>
            ) : (
              <Button variant="contained" onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
            <IconButton onClick={() => navigate("/wishlist")}>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton onClick={() => navigate("/cart")}>
              <AddShoppingCart
                sx={{ fontSize: 29 }}
                className="text-gray-700"
              />
            </IconButton>
            {isLarge && (
              <Button
                onClick={() => navigate("/become-seller")}
                variant="outlined"
              >
                Become Seller
              </Button>
            )}
          </div>
        </div>
        {showCategorySheet && (
          <div
            onMouseLeave={() => setShowCategorySheet(false)}
            onMouseEnter={() => setShowCategorySheet(true)}
            className="categorySheet absolute top-[4.41rem] left-20 right-20 border"
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>
    </>
  );
};

export default Navbar;
