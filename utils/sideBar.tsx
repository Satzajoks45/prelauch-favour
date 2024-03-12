import {
  ChatIcon,
  HomeIcon,
  OrderIcon,
  OrderPickUpIcon,
  ProductIcon,
  RoleIcon,
} from "../public/assets/icons/index";

export const sidebarRoutes = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Orders",
    path: "/orders",
    icon: <OrderIcon />,
  },
  {
    id: 3,
    name: "Products",
    path: "/products",
    icon: <ProductIcon />,
  },
  {
    id: 4,
    name: "Chat",
    path: "/chat",
    icon: <ChatIcon />,
  },
  {
    id: 5,
    name: "Role/management",
    path: "/role-management",
    icon: <RoleIcon />,
  },
  {
    id: 6,
    name: "Order pick-up",
    path: "/pick-up",
    icon: <OrderPickUpIcon />,
  },
  {
    id: 7,
    name: "Payment",
    path: "/payment",
    icon: <OrderIcon />, //change it
  },
];
