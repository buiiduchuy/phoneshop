import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductApiById } from '@/features/products/services/productService';
import { Skeleton } from 'antd';

const Detail = () => {
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const res = await getProductApiById(id);
        setProd(res.data);
        setLoading(false);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetchProductById();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-330 mx-auto pt-10">
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="max-w-330 mx-auto pageDetail">
      <div className="py-10">
        <div className="detail-product flex">
          <aside className="detail-left flex-1 pr-2.5">
            <figure>
              <img src={`${prod.img}`} alt={`${prod.name}`} className="w-full max-w-[80%] mx-auto" />
            </figure>
          </aside>
          <aside className="detail-right flex-1">
            <div className="text-base">
              <h3 className="text-2xl mb-2.5 font-bold">{prod.name}</h3>
              <p className="mb-2.5 -indent-30 pl-30"><span className='font-bold text-xl'>Description</span> : {prod.desc}</p>
              <p className="mb-2.5 -indent-30 pl-30"><span className='font-bold text-xl'>Back camera</span> : {prod.backCamera}</p>
              <p className="mb-2.5 -indent-30 pl-30"><span className='font-bold text-xl'>Front camera</span> :{prod.frontCamera}</p>
              <p className="mb-2.5 -indent-30 pl-30"><span className='font-bold text-xl'>Screen</span> : {prod.screen}</p>
              <p className="mb-2.5 -indent-30 pl-30"><span className='font-bold text-xl'>Price</span> : ${prod.price}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Detail