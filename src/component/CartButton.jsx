import React from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { openModal } from '@/features/cart/CartSlice';

export const CartButton = () => {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.listCart);
  const quantityInCart = listCart.reduce((total, item) => (total += item.quantity), 0);
  return (
    <Button className="relative text-gray-700" onClick={() => dispatch(openModal())} type="text">
      <ShoppingCartOutlined className="text-2xl" />
      {quantityInCart > 0 && (
        <span className="absolute -top-1 -right-1 bg-gray-500 text-white text-xs px-1.5 rounded-full">
          {quantityInCart}
        </span>
      )}
    </Button>
  );
};
