import React from 'react';
import { Button } from '@/component/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { toastify } from '@/utils/toastify';

export const ProductItem = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  return (
    <div className="card shadow-[0px_0px_10px_3px_rgba(0,0,0,0.1)] rounded-3xl p-5 overflow-hidden hover:-translate-y-2.5 hover:shadow-[0px_0px_20px_10px_rgba(0,0,0,0.1)] transition-all">
      <div className="aspect-square relative overflow-hidden mb-4">
        <img
          className="absolute top-0 left-0 right-0 bottom-0 h-auto max-[100%]"
          src={product.img}
          alt={product.name}
        />
      </div>
      <div className="card-body">
        <h3 className="text-[14px] font-bold uppercase text-center mb-1">{product.name}</h3>
        <p className="text-center font-medium mb-3">
          <span className="inline-block me-0.5">$</span>
          {product.price}
        </p>
        <div className="text-center flex justify-center gap-2.5">
          <Link
            to={`/product/${product.id}`}
            className="btn-comp border border-solid rounded-full border-black py-1.5 px-5 inline-block relative bg-black overflow-hidden"
          >
            <span className="inline-block z-10 relative">Detail</span>
          </Link>
          <Button
            text={'Add to cart'}
            className="ms-2"
            onClick={() => {dispatch(addToCart(product));toastify("Added to cart successfully")}}
          />
        </div>
      </div>
    </div>
  );
};
