"use client";

import { Menu, message } from "antd";
import { useRouter } from "next/navigation"; // Use Next.js router to handle redirection

const DropdownMenu = () => {
  const router = useRouter();

  // Logout function
  const handleLogout = () => {
    // Clear the session or token (replace with your actual logic)
    localStorage.removeItem("authToken"); // Example: removing the token from localStorage

    // Optional: Display a success message
    message.success("Logged out successfully");

    // Redirect the user to the login page
    router.push("/");
  };

  return (
    <Menu>
      <Menu.Item key="1">Change Password</Menu.Item>
      <Menu.Item key="2" onClick={handleLogout}>Logout</Menu.Item>
    </Menu>
  );
};

export default DropdownMenu;
