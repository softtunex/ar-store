"use client"; // Marking the component as client-side

import { Menu, Divider, Switch } from "antd"; 
import { BulbOutlined, BulbFilled, ShopOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import { sidebarMenu } from "@/data/sidebarMenu"; // Ensure this path is correct

export default function Sidebar({ userRole }) {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (checked) => {
    setTheme(checked ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", checked ? "dark" : "light");
  };

  return (
    <aside className={`w-64 h-screen bg-gray-50 p-4 shadow-lg flex flex-col justify-between ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
      {/* Store logo and name */}
      <div>
        <div className="mb-8 text-center flex items-center justify-center">
          <ShopOutlined className="text-2xl" />
          <h2 className="font-bold text-lg ml-2">AR-Store</h2>
        </div>

        {/* Main Ant Design Menu */}
        <Menu theme={theme} mode="inline" defaultSelectedKeys={['1']}>
          {sidebarMenu.map((menu) => (
            menu.roles.length === 0 || menu.roles.includes(userRole) ? (
              menu.subMenu ? (
                <Menu.SubMenu key={menu.title} icon={menu.icon} title={menu.title}>
                  {menu.subMenu.map((sub) => (
                    sub.roles.length === 0 || sub.roles.includes(userRole) ? (
                      <Menu.Item key={sub.url}>
                        <Link href={sub.url}>{sub.title}</Link>
                      </Menu.Item>
                    ) : null
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={menu.url} icon={menu.icon}>
                  <Link href={menu.url}>{menu.title}</Link>
                </Menu.Item>
              )
            ) : null
          ))}
        </Menu>
      </div>

      {/* Divider and Theme Toggle at the bottom */}
      <div className="pb-4">
        <Divider />
        <div className="flex justify-between items-center px-4">
          <Switch
            checked={theme === 'dark'}
            onChange={handleThemeChange}
            checkedChildren={<BulbFilled />}
            unCheckedChildren={<BulbOutlined />}
          />
        </div>
      </div>
    </aside>
  );
}
