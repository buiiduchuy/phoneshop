import { Button } from '@/component/Button';
import React from 'react'

export const ProductItem = (props) => {
  const {product} = props
  console.log("item: ", product);
  return (
  <div className="card shadow-[0px_0px_10px_3px_rgba(0,0,0,0.1)] rounded-3xl p-5 overflow-hidden hover:-translate-y-2.5 hover:shadow-[0px_0px_20px_10px_rgba(0,0,0,0.1)] transition-all">
      <div className='aspect-square relative overflow-hidden mb-4'>
        <img className='absolute top-0 left-0 right-0 bottom-0 h-auto max-[100%]' src={product.img} alt={product.name} />
      </div>
      <div className="card-body">
        <h3 className='text-[14px] font-bold uppercase text-center mb-1'>{product.name}</h3>
        <p className='text-center font-medium mb-3'><span className='inline-block me-0.5'>$</span>{product.price}</p>
        <div className='text-center flex justify-center gap-2.5'>
          <Button text={'Detail'}/>
          <Button text={'Add to cart'} className='ms-2'/>
        </div>
      </div>
    </div>
  )
}
