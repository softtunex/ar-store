// app/dashboard/page.js
"use client";
import {  Col, Row,} from 'antd';
import { InboxOutlined, FlagOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Chart as ChartJS
} from 'chart.js';
import DashboardHeader from './dashboard/DashboardHeader';
import StatsCard from './dashboard/StatsCard';
import ChartsSection from './dashboard/ChartsSection';
import RecentActivityFeed from './dashboard/RecentActivityFeed';
import LowEngagementProducts from './dashboard/LowEngagementProducts';

// Registering chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const qrScanData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'QR Scans',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      tension: 0.4,
    },
    {
      label: 'AR Views',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.4,
    },
  ],
};

export default function DashboardOverview() {
  const [rangeType, setRangeType] = useState('weekly');
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <DashboardHeader rangeType={rangeType} handleRangeTypeChange={setRangeType} />
      <Row gutter={16}>
        <Col span={8}>
          <StatsCard
            activeCard={activeCard}
            cardName="total"
            onClick={setActiveCard}
            icon={<InboxOutlined />}
            title="Total Products"
            value="1250"
            percentage="10%"
          />
        </Col>
        <Col span={8}>
          <StatsCard
            activeCard={activeCard}
            cardName="flagged"
            onClick={setActiveCard}
            icon={<FlagOutlined />}
            title="Flagged Products"
            value="1250"
            percentage="10%"
          />
        </Col>
        <Col span={8}>
          <StatsCard
            activeCard={activeCard}
            cardName="owners"
            onClick={setActiveCard}
            icon={<UserOutlined />}
            title="Business Owners"
            value="150"
            percentage="10%"
          />
        </Col>
      </Row>
      <ChartsSection qrScanData={qrScanData} />
      <Row gutter={16} className="mt-6">
        <Col span={12}>
          <RecentActivityFeed />
        </Col>
        <Col span={12}>
          <LowEngagementProducts />
        </Col>
      </Row>
    </div>
  );
}
