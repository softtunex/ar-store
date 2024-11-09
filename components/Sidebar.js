"use client";

import { Menu, Divider, Switch, Avatar } from "antd";
import {
  BulbOutlined,
  BulbFilled,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import { sidebarMenu } from "@/data/sidebarMenu"; // Import your menu data

export default function Sidebar({ collapsed, toggleCollapse }) {
  const [theme, setTheme] = useState("light");
  const [openKeys, setOpenKeys] = useState([]);

  const handleThemeChange = (checked) => {
    setTheme(checked ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", checked ? "dark" : "light");
  };



  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <aside
      className={`fixed top-0 left-0 ${collapsed ? "w-20" : "w-64"} h-screen bg-gray-50 p-4 shadow-lg flex flex-col justify-between ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}
    >
      {/* Logo and collapse toggle */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <h2 className="font-bold text-lg ml-2">{collapsed ? "" : "AR Marketplace"}</h2>
        </div>
        <button onClick={toggleCollapse} className="p-1 text-xl">
          {collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
        </button>
      </div>

      {/* General Menu */}
      <div className="menu flex-1 overflow-y-auto ">
        <h3 className={`${collapsed ? "hidden" : "block"} text-xs uppercase font-semibold text-gray-500 mb-4`}>
          General
        </h3>
        <Menu
          theme={theme}
          mode="inline"
          inlineCollapsed={collapsed}
          onOpenChange={onOpenChange}
          openKeys={openKeys}
          defaultSelectedKeys={["1"]}
        >
          {sidebarMenu.general.map((menu) => (
            menu.subMenu ? (
              <Menu.SubMenu key={menu.title} icon={menu.icon} title={!collapsed && menu.title}>
                {menu.subMenu.map((sub) => (
                  <Menu.Item key={sub.url}>
                    <Link href={sub.url}>{sub.title}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={menu.url} icon={menu.icon}>
                <Link href={menu.url}>{!collapsed && menu.title}</Link>
              </Menu.Item>
            )
          ))}
        </Menu>
      </div>

      {/* Support Section */}
      <div className="pb-4">
        <Divider />
        <h3 className={`${collapsed ? "hidden" : "block"} text-xs uppercase font-semibold text-gray-500 mb-4`}>
          Support
        </h3>
        <Menu theme={theme} mode="inline">
          {sidebarMenu.support.map((menu) => (
            <Menu.Item key={menu.url} icon={menu.icon}>
              <Link href={menu.url}>{!collapsed && menu.title}</Link>
            </Menu.Item>
          ))}
        </Menu>

        {/* User Profile */}
        <div className={`mt-8 flex items-center px-4 ${collapsed ? "justify-center" : ""}`}>
          <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" size={40} />
          {!collapsed && (
            <div className="ml-2">
              <p className="font-bold">Jean Monrow</p>
              <p className="text-gray-400 text-xs">jeanmonrow@financevu.com</p>
            </div>
          )}
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="flex justify-between items-center px-4 mt-4">
        <Switch
          checked={theme === "dark"}
          onChange={handleThemeChange}
          checkedChildren={<BulbFilled />}
          unCheckedChildren={<BulbOutlined />}
        />
      </div>
    </aside>
  );
}
