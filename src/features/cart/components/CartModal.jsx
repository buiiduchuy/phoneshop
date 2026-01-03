import React from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/features/cart/cartSlice';
import { CartItem } from './CartItem';


export const CartModal = () => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const open = useSelector((state) => state.cart.modal);
  const listCart = useSelector((state)=>state.cart.listCart)
  console.log("listCart: ", listCart);
  const dispatch = useDispatch();

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(openModal());
      setConfirmLoading(false);
    }, 1500);
  };

  const handleCancel = () => {
    dispatch(openModal());
  };
  return (
    <Modal
      title="Cart Manager"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <table className='table-auto'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         <CartItem/>
        </tbody>
      </table>
    </Modal>
  );
};
