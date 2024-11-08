import { Button, Select } from "antd";
import dayjs from "dayjs";

// components/Header.js
export default function DashboardHeader({ rangeType, handleRangeTypeChange }) {
    return (
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Hey John</h1>
          <p className="text-gray-400">{dayjs().format('dddd, MMMM D, YYYY')}</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={rangeType} onChange={handleRangeTypeChange} style={{ width: 150 }}>
            <Select.Option value="weekly">This Week</Select.Option>
            <Select.Option value="monthly">This Month</Select.Option>
          </Select>
          <Button type="primary">Export</Button>
        </div>
      </div>
    );
  }
  