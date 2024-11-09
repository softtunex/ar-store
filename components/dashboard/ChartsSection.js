// components/ChartsSection.js
'use client';

import { Bar, Line } from 'react-chartjs-2';
import { Card, Col, Row } from 'antd';

export default function ChartsSection({ qrScanData }) {
  return (
    <Row gutter={16} className="mt-6">
      <Col span={12}>
        <Card className="shadow-lg" bordered={false}>
          <h2 className="font-semibold mb-4">Engagement Trends</h2>
          <Line data={qrScanData} />
        </Card>
      </Col>
      <Col span={12}>
        <Card className="shadow-lg" bordered={false}>
          <h2 className="font-semibold mb-4">Top-Performing Products</h2>
          <Bar
            data={{
              labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
              datasets: [
                {
                  label: 'Sales',
                  data: [3000, 5000, 4000, 3500, 4200],
                  backgroundColor: ['#6B46C1', '#9F7AEA', '#B794F4', '#D6BCFA', '#E9D8FD'],
                },
              ],
            }}
          />
        </Card>
      </Col>
    </Row>
  );
}
