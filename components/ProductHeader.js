"use client"
import { Select, Button, Input, Dropdown, Menu } from 'antd';
import { FilterOutlined, ShareAltOutlined, PlusOutlined } from '@ant-design/icons';

export default function ProductHeader({ totalProducts }) {
  const { Option } = Select;

  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center">
        {/* Total products */}
        <h2 className="text-xl font-semibold mr-4">Products <span className="text-green-500">{totalProducts}</span></h2>

        {/* Filters */}
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="1">All Status</Menu.Item>
              <Menu.Item key="2">Active</Menu.Item>
              <Menu.Item key="3">No Active</Menu.Item>
            </Menu>
          )}
        >
          <Button className="ml-4">
            Status
          </Button>
        </Dropdown>

        {/* Category Filter */}
        <Select defaultValue="All Collection" className="ml-4">
          <Option value="all">All Collection</Option>
          <Option value="live">Live</Option>
          <Option value="archive">Archive</Option>
        </Select>

        {/* Price Range */}
        <Select defaultValue="Price" className="ml-4">
          <Option value="all">All Price</Option>
          <Option value="50-100">$50 - $100</Option>
          <Option value="100-200">$100 - $200</Option>
        </Select>
      </div>

      <div className="flex items-center">
        {/* Search Box */}
        <Input.Search placeholder="Search products" style={{ width: 200 }} className="mr-4" />

        {/* Filter Button */}
        <Button className="mr-4">
          <FilterOutlined /> Filter
        </Button>

        {/* Share Button */}
        <Button className="mr-4">
          <ShareAltOutlined /> Share
        </Button>

        {/* Add New Product Button */}
        <Button type="primary" icon={<PlusOutlined />}>
          Add New Product
        </Button>
      </div>
    </div>
  );
}
