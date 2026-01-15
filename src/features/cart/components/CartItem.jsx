import { Button } from 'antd';
import { CloseOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import React from 'react';
import { changeCartQuantity ,deleteItem} from '@/features/cart/cartSlice';
import { useDispatch } from 'react-redux';

export const CartItem = React.memo(({ prod }) => {
  const dispatch = useDispatch();
  return (
    <tr className="border align-baseline">
      <td className="px-4 font-medium line-clamp-2 align-middle h-full">
        {(prod.name).length >100 ? (prod.name).slice(0,100)+'...' : (prod.name)}
        </td>
      <td className="px-2 py-3 text-center">
        <img src={prod.img} alt={prod.name} width={'80px'} className="inline-block" />
      </td>
      <td className="px-4 font-medium text-center">${prod.price}</td>
      <td className="px-4 font-medium text-center">{prod.quantity}</td>
      <td className="px-4 font-medium text-center">${(prod.quantity * prod.price).toFixed(2)}</td>
      <td className="px-4 text-center">
        <Button
          type="text"
          style={{ padding: '0 8px',fontSize:'12px'}}
          onClick={() => dispatch(changeCartQuantity({ id: prod.id, type: 'increase' }))}
        >
          <PlusOutlined />
        </Button>
        <Button
          type="text"
          style={{ padding: '0 8px',fontSize:'12px'}}
          onClick={() => dispatch(changeCartQuantity({ id: prod.id, type: 'decrease' }))}
        >
          <MinusOutlined />
        </Button>
        <Button 
        type="text"
        style={{ padding: '0 8px',fontSize:'12px'}}
        onClick={() => dispatch(deleteItem({ id: prod.id}))}
        >
          <CloseOutlined />
        </Button>
      </td>
    </tr>
  );
});
