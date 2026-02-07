import React from 'react';
import { ProductItem } from './ProductItem';
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../productSelector';

export const ProductList = () => {
  const list = useSelector(selectFilteredProducts);

  return (
    <div className="grid grid-cols-4 gap-8">
      {list.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};
