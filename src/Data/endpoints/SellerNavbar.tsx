import {
  Dashboard,
  ShoppingBag,
  Inventory,
  Add,
  AccountBalanceWallet,
  Receipt,
  AccountBox,
  Logout,
} from "@mui/icons-material";

export const menu = [
  {
    name: "Dashboard",
    path: "/seller",
    icon: <Dashboard className="text-primary-custom" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "Orders",
    path: "/seller/orders",
    icon: <ShoppingBag className="text-primary-custom" />,
    activeIcon: <ShoppingBag className="text-white" />,
  },
  {
    name: "Products",
    path: "/seller/products",
    icon: <Inventory className="text-primary-custom" />,
    activeIcon: <Inventory className="text-white" />,
  },
  {
    name: "Add Product",
    path: "/seller/add-product",
    icon: <Add className="text-primary-custom" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: "Payment",
    path: "/seller/payment",
    icon: <AccountBalanceWallet className="text-primary-custom" />,
    activeIcon: <AccountBalanceWallet className="text-white" />,
  },
  {
    name: "Transaction",
    path: "/seller/transaction",
    icon: <Receipt className="text-primary-custom" />,
    activeIcon: <Receipt className="text-white" />,
  },
];
export const menu2 = [
  {
    name: "Account",
    path: "/seller/account",
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
