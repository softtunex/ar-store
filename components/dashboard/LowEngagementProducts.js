// components/LowEngagementProducts.js
'use client';

import { Card, Button } from 'antd';

export default function LowEngagementProducts() {
  return (
    <Card className="shadow-lg" bordered={false}>
      <h2 className="font-semibold mb-4">Low-Engagement Products</h2>
      <div className="space-y-4">
        {[
          { name: 'Product X', engagement: 10 },
          { name: 'Product Y', engagement: 8 },
          { name: 'Product Z', engagement: 7 },
        ].map((product, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-400">Engagement: {product.engagement}</p>
            </div>
            <div className="space-x-2">
              <Button type="primary" className="bg-purple-600 border-none">
                Notify Owner
              </Button>
              <Button className="border-gray-400">Investigate</Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
