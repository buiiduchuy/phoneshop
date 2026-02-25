import { Button } from '@/component/Button';
import { ModalAdmin } from '@/component/ModalAdmin';
import { SearchProductAdmin } from '@/component/SearchProductAdmin';
import { ProductListAdmin } from '@/features/products/components/ProductListAdmin';
import React, { useState } from 'react';

const Admin = () => {
  const [modal, setModal] = useState({
    open: false,
    mode: 'create',
    product: null,
  });
  return (
    <div className="max-w-330 mx-auto homepageAdmin pt-10">
      <div className="mb-10">
        <h3 className="text-center py-3 font-bold text-4xl mb-5">Product Manager</h3>
      </div>
      <div className="mb-10">
        <div className="flex gap-2">
          <div className="w-3/4">
            <SearchProductAdmin setModal={setModal} />
          </div>
          <div className="w-1/4">
            <Button
              text={'Add product'}
              onClick={() =>
                setModal({
                  open: true,
                  mode: 'create',
                  product: null,
                })
              }
            />
          </div>
        </div>
        <ModalAdmin modal={modal} setModal={setModal} />
      </div>
      <div className="mb-10">
        <ProductListAdmin setModal={setModal} />
      </div>
    </div>
  );
};

export default Admin;
