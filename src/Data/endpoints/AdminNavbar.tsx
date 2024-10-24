import {
  Dashboard,
  IntegrationInstructions,
  Add,
  Home,
  Inventory,
  ElectricBolt,
  Category,
  LocalOffer,
  AccountBox,
  Logout,
} from "@mui/icons-material";

export const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <Dashboard className="text-primary-custom" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "Coupons",
    path: "/admin/coupons",
    icon: <IntegrationInstructions className="text-primary-custom" />,
    activeIcon: <IntegrationInstructions className="text-white" />,
  },
  {
    name: "Add New Coupon",
    path: "/admin/add-coupon",
    icon: <Add className="text-primary-custom" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: "Home Page",
    path: "/admin/home-grid",
    icon: <Home className="text-primary-custom" />,
    activeIcon: <Home className="text-white" />,
  },
  {
    name: "Products",
    path: "/admin/products",
    icon: <Inventory className="text-primary-custom" />,
    activeIcon: <Inventory className="text-white" />,
  },
  {
    name: "Electronic Category",
    path: "/admin/electronics-category",
    icon: <ElectricBolt className="text-primary-custom" />,
    activeIcon: <ElectricBolt className="text-white" />,
  },
  {
    name: "Shop By Category",
    path: "/admin/shop-by-category",
    icon: <Category className="text-primary-custom" />,
    activeIcon: <Category className="text-white" />,
  },
  {
    name: "Deals",
    path: "/admin/deals",
    icon: <LocalOffer className="text-primary-custom" />,
    activeIcon: <LocalOffer className="text-white" />,
  },
];

export const menu2 = [
  {
    name: "Account",
    path: "/admin/account",
    icon: <AccountBox className="text-primary-custom" />,
    activeIcon: <AccountBox className="text-white" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <Logout className="text-primary-custom" />,
    activeIcon: <Logout className="text-white" />,
  },
];
