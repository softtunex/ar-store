"use client";

import { Card} from 'antd';
import { InfoCircleOutlined} from '@ant-design/icons';

export default function StatsCard({ activeCard, cardName, onClick, icon, title, value, percentage }) {
  return (
    <Card
      className={`shadow-lg ${activeCard === cardName ? 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white' : 'bg-white'}`}
      bordered={false}
      onClick={() => onClick(cardName)}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {icon}
          <h2 className={`${activeCard === cardName ? 'text-white' : 'text-gray-500'} text-sm font-bold`}>{title}</h2>
        </div>
        <InfoCircleOutlined className={`${activeCard === cardName ? 'text-white' : 'text-gray-500'}`} />
      </div>
      <div className="mt-4">
        <span className={`${activeCard === cardName ? 'text-white' : 'text-gray-800'} text-4xl font-bold`}>{value}</span>
        <div className="inline-block ml-4 bg-blue-100 text-blue-600 p-1 rounded-md text-sm">
          <span>{percentage}</span>
          <span className="ml-1">⬆</span>
        </div>
      </div>
    </Card>
  );
}
