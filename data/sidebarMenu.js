// data/sidebarMenu.js
import {
  HomeOutlined,
  BoxPlotOutlined,
  BarChartOutlined,
  UserOutlined,
  SettingOutlined,
  LockOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

export const sidebarMenu = {
  general: [
    {
      title: "Dashboard",
      icon: <HomeOutlined />,
      url: "/dashboard",
      roles: [], // Visible to all users
    },
    {
      title: "Product Management",
      icon: <BoxPlotOutlined />,
      roles: ["super_admin", "business_owner"], // Ensure only allowed roles can view this
      subMenu: [
        { title: "Add Product", url: "/products/add", roles: ["super_admin", "business_owner"] },
        { title: "Manage Products", url: "/products/manage", roles: ["super_admin", "business_owner"] },
      ],
    },
    {
      title: "Analytics",
      icon: <BarChartOutlined />,
      url: "/analytics",
      roles: ["super_admin", "business_owner"],
    },
    {
      title: "Business Owners",
      icon: <UserOutlined />,
      url: "/business-owners",
      roles: ["super_admin"],
    },
  ],
  support: [
    {
      title: "Settings",
      icon: <SettingOutlined />,
      url: "/settings",
      roles: ["super_admin", "business_owner"],
    },
    {
      title: "Security",
      icon: <LockOutlined />,
      url: "/security",
      roles: ["super_admin", "business_owner"],
    },
    {
      title: "Help",
      icon: <QuestionCircleOutlined />,
      url: "/help",
      roles: [],
    },
  ],
};
