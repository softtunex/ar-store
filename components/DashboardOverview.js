"use client"; // Marking the component as client-side

import { Bar } from 'react-chartjs-2';
import { Card, Col, Row, Statistic, Button, DatePicker, Select } from 'antd';
import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Chart as ChartJS } from 'chart.js';
import { ArrowUpOutlined } from '@ant-design/icons';
import dayjs from 'dayjs'; // Replaced moment with dayjs
import { useState } from 'react';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const { RangePicker } = DatePicker;
const { Option } = Select;

// Dummy data for both roles
const initialData = {
  superAdmin: {
    totalStores: 124,
    totalProducts: 100,
    weeklySales: 84920540,
    recentOrders: 14920540,
    qrScanData: [1000, 2000, 1500, 4000],
    arInteractionData: [800, 900, 950, 850],
  },
  businessOwner: {
    totalProducts: 50,
    weeklySales: 40000000,
    recentOrders: 9000000,
    qrScanData: [500, 1000, 800, 900],
    arInteractionData: [300, 400, 500, 600],
  }
};

// Chart Data function
const createChartData = (labels, data, label) => ({
  labels,
  datasets: [{
    label,
    data,
    backgroundColor: 'rgba(54, 162, 235, 0.6)',
  }]
});

export default function DashboardOverview({ role }) {
  const [data, setData] = useState(role === "super_admin" ? initialData.superAdmin : initialData.businessOwner);
  const [rangeType, setRangeType] = useState('week');

  // Chart data
  const qrScanData = createChartData(['Week 1', 'Week 2', 'Week 3', 'Week 4'], data.qrScanData, 'QR Code Scans');
  const arInteractionData = createChartData(['Week 1', 'Week 2', 'Week 3', 'Week 4'], data.arInteractionData, 'AR Interactions');

  // Function to handle date/range change
  const handleRangeChange = (dates, dateStrings) => {
    if (!dates || dates.length === 0) return;

    const start = dates[0];
    const end = dates[1];

    const filteredData = {
      ...data,
      weeklySales: Math.floor(Math.random() * 100000000), // Simulated data
      recentOrders: Math.floor(Math.random() * 50000000),
      qrScanData: [500, 1000, 1500, 2000],
      arInteractionData: [300, 400, 500, 600],
    };

    setData(filteredData);
  };

  // Handle range type change (day, week, month, year)
  const handleRangeTypeChange = (value) => {
    setRangeType(value);
  };

  return (
    <div className="dashboard-overview p-4 bg-gray-50">
      {/* Range Type Selector */}
      <div className="flex justify-between items-center mb-4">
        <Select value={rangeType} onChange={handleRangeTypeChange} style={{ width: 200 }}>
          <Option value="day">Daily</Option>
          <Option value="week">Weekly</Option>
          <Option value="month">Monthly</Option>
          <Option value="year">Yearly</Option>
        </Select>
        <RangePicker
          defaultValue={[dayjs().startOf('week'), dayjs().endOf('week')]} // Updated for Day.js
          onChange={handleRangeChange}
          style={{ width: 300 }}
        />
      </div>

      {/* Super Admin and Business Owner Cards */}
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card bordered={false} style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)', color: '#fff' }}>
            <Statistic title="Weekly Sales" value={`₦${data.weeklySales.toLocaleString()}`} valueStyle={{ color: '#fff' }} />
            <span style={{ fontSize: '12px', color: '#fff' }}>14% increase</span>
            <ArrowUpOutlined style={{ color: '#fff' }} />
          </Card>
        </Col>

        {role === "super_admin" ? (
          <>
            <Col span={6}>
              <Card bordered={false} style={{ background: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)', color: '#fff' }}>
                <Statistic title="Total Stores" value={data.totalStores} valueStyle={{ color: '#fff' }} />
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={false} style={{ background: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)', color: '#fff' }}>
                <Statistic title="Total Products" value={data.totalProducts} valueStyle={{ color: '#fff' }} />
              </Card>
            </Col>
          </>
        ) : (
          <>
            <Col span={6}>
              <Card bordered={false} style={{ background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)', color: '#fff' }}>
                <Statistic title="Total Products" value={data.totalProducts} valueStyle={{ color: '#fff' }} />
              </Card>
            </Col>
          </>
        )}

        <Col span={6}>
          <Card bordered={false} style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)', color: '#fff' }}>
            <Statistic title="Recent Orders" value={`₦${data.recentOrders.toLocaleString()}`} valueStyle={{ color: '#fff' }} />
          </Card>
        </Col>
      </Row>

      {/* Charts */}
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col span={12}>
          <Card title="QR Code Scans" bordered={false}>
            <Bar data={qrScanData} />
          </Card>
        </Col>

        <Col span={12}>
          <Card title="AR Interactions" bordered={false}>
            <Bar data={arInteractionData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
