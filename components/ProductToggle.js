// components/ProductToggle.js
"use client";

import { Switch } from 'antd';

export default function ProductToggle({ status, onToggle }) {
  return (
    <Switch 
      checked={status === 'active'} 
      onChange={(checked) => onToggle(checked)}  // Pass the new status back to parent
    />
  );
}
