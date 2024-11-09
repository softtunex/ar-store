// app/(root)/products/manage/page.js
import ProductHeader from '@/components/ProductHeader';
import ProductTable from '@/components/ProductTable';
import { productsData } from '@/data/productsData';

export default function ManageProducts() {
  const totalProducts = productsData.length;

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <ProductHeader totalProducts={totalProducts} />
      <ProductTable />
    </div>
  );
}