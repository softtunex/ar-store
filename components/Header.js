import { Badge, Avatar, Button, Dropdown } from "antd";
import { BellOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";
import DropdownMenu from "@/components/menu/HeaderMenu"; // Import the dropdown menu

export default function Header() {
  return (
    <header className="w-full p-2 shadow-md flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center">
          <SearchOutlined className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search or type a command"
            className="pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-80 bg-gray-100"
          />
          <span className="absolute right-3 text-gray-400">⌘ F</span>
        </div>
      </div>

      {/* Right side: Create button, Notifications, and User Avatar */}
      <div className="flex items-center space-x-6">
        {/* Create Button */}
        <Button type="primary" icon={<PlusOutlined />} className="flex items-center space-x-2">
          Create
        </Button>

        {/* Notifications */}
        <Badge count={5} className="cursor-pointer">
          <BellOutlined className="text-xl" />
        </Badge>

        {/* User Avatar with Dropdown */}
        <Dropdown overlay={<DropdownMenu />} trigger={['click']} placement="bottomRight">
          <Avatar
            size={40}
            src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with actual user image URL
            className="cursor-pointer"
          />
        </Dropdown>
      </div>
    </header>
  );
}
