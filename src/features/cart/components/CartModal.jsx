import React from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, clearModal } from '@/features/cart/CartSlice';
import { CartItem } from './CartItem';

export const CartModal = () => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const open = useSelector((state) => state.cart.modal);
  const listCart = useSelector((state) => state.cart.listCart);
  const dispatch = useDispatch();

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(closeModal());
      dispatch(clearModal());
      setConfirmLoading(false);
    }, 1500);
  };

  return (
    <Modal
      title="Cart Manager"
      open={open}
      onOk={handleOk}
      okText="Checkout"
      confirmLoading={confirmLoading}
      onCancel={() => {
        dispatch(closeModal());
      }}
      width={'90%'}
      style={{ maxWidth: '900px' }}
    >
      <div className="relative shadow-xs rounded-base">
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200 border">
              <th scope="col" className="px-4 py-3">
                Name
              </th>
              <th scope="col" className="px-4 py-3">
                Image
              </th>
              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3" style={{ width: '115px' }}>
                Quantity
              </th>
              <th scope="col" className="px-4 py-3">
                Total
              </th>
              <th scope="col" className="px-4 py-3" style={{ width: '130px' }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {listCart.map((item) => (
              <CartItem key={item.id} prod={item} />
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};
