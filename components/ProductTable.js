// components/ProductTable.js
"use client"
import { Table } from 'antd';
import { columns } from '@/data/columns';
import { productsData } from '@/data/productsData';

export default function ProductTable() {
  return (
    <Table 
      columns={columns}
      dataSource={productsData}
      pagination={false}
      rowKey="id"
    />
  );
}
