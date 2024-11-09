// components/RecentActivityFeed.js
'use client';

import { Card } from 'antd';

export default function RecentActivityFeed() {
  return (
    <Card className="shadow-lg" bordered={false}>
      <h2 className="font-semibold mb-4">Recent Activity Feed</h2>
      <div className="space-y-4">
        {[
          { activity: "New business owner 'TechInnovators' registered", type: 'info', time: 'Just now' },
          { activity: "Admin notified owner of low engagement for 'SmartHome Hub'", type: 'success', time: 'Just now' },
          { activity: "Product 'VR Headset' flagged for review", type: 'danger', time: 'Just now' },
          { activity: "New business owner 'Technovators' registered", type: 'info', time: 'Just now' },
        ].map((activity, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
            <div>
              <p
                className={`font-semibold ${
                  activity.type === 'info' ? 'text-blue-500' : activity.type === 'success' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {activity.activity}
              </p>
              <p className="text-sm text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
