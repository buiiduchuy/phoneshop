import { SearchProductAdmin } from '@/component/SearchProductAdmin';
import { ProductListAdmin } from '@/features/products/components/ProductListAdmin';
import React from 'react';

const Admin = () => {
  return (
    <div className="max-w-330 mx-auto homepage pt-10">
      <div className="mb-10">
        <h3 className="text-center py-3 font-bold text-4xl mb-5">Product Manager</h3>
      </div>
      <div className="mb-10">
        <SearchProductAdmin />
      </div>
      <div className="mb-10">
        <ProductListAdmin />
      </div>
    </div>
  );
};

export default Admin;
