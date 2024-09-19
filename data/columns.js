// data/columns.js
import ProductToggle from '@/components/ProductToggle';
import { Image } from 'antd';
import Link from 'next/link';

export const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    render: (product) => (
      <div className="flex items-center space-x-2">
        <Image width={50} src={product.image} alt={product.name} />
        <div>
          <p>{product.name}</p>
          <p className="text-gray-400">ID: {product.id}</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (price) => <span>₦{price}</span>,
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
    render: (stock) => <span>{stock}</span>,
  },
  {
    title: 'QR Code',
    dataIndex: 'qrCode',
    key: 'qrCode',
    render: (qrCode) => <Link href={`/products/${qrCode}`}>View QR</Link>,
  },
  {
    title: '360 Video',
    dataIndex: 'video360',
    key: 'video360',
    render: (video360) => (video360 ? <Link href={`/products/${video360}`}>View Video</Link> : 'N/A'),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status, record) => (
      <ProductToggle 
        status={status} 
        onToggle={(checked) => handleStatusToggle(checked, record.productId)}
      />
    ),
  },
];

// Add the handler for toggling product status
const handleStatusToggle = (checked, productId) => {
  const newStatus = checked ? 'active' : 'inactive';
  console.log(`Status for product ${productId} changed to ${newStatus}`);
  // Implement the logic to update the status in your backend or state here.
};
