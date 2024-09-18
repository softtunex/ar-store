// data/sidebarMenu.js
import {
  HomeOutlined,
  UserOutlined,
  BoxPlotOutlined,
  BarChartOutlined,
  SettingOutlined,
  EyeOutlined,
} from "@ant-design/icons";

export const sidebarMenu = [
  {
    title: "Dashboard",
    icon: <HomeOutlined />,
    url: "/dashboard",
    roles: [], // Visible to all users
  },
  {
    title: "Products",
    icon: <BoxPlotOutlined />,
    roles: ["super_admin", "business_owner"],
    subMenu: [
      { title: "Add Product", url: "/products/add", roles: ["business_owner"] },
      { title: "Manage Products", url: "/products/manage", roles: ["super_admin","business_owner"] },
    ],
  },
  {
    title: "Customers",
    icon: <UserOutlined />,
    roles: ["super_admin"],
    subMenu: [
      { title: "Customer Overview", url: "/customers/overview", roles: ["super_admin"] },
      { title: "Customer List", url: "/customers/list", roles: ["super_admin"] },
    ],
  },
  {
    title: "Analytics",
    icon: <BarChartOutlined />,
    roles: ["super_admin", "business_owner"],
    subMenu: [
      { title: "Platform Analytics", url: "/analytics/platform", roles: ["super_admin"] },
      { title: "Product Analytics", url: "/analytics/products", roles: ["business_owner"] },
    ],
  },
  {
    title: "Settings",
    icon: <SettingOutlined />,
    url: "/settings",
    roles: ["super_admin", "business_owner"],
  },
  {
    title: "Product Engagement Tracking",
    icon: <EyeOutlined />,
    url: "/tracking",
    roles: ["super_admin", "business_owner"],
  },
];
