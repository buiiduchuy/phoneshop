import { SearchProductAdmin } from '@/component/SearchProductAdmin';
import React from 'react';

const Admin = () => {
  return (
    <div className="max-w-330 mx-auto homepage pt-10">
      <div className="mb-10">
        <h3 className="text-center py-3 font-bold text-4xl mb-5">Product Manager</h3>
      </div>
      <div>
        <SearchProductAdmin />
      </div>
    </div>
  );
};

export default Admin;
