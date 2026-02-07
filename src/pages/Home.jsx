import React from 'react';
import { useEffect } from 'react';
import { Carousel } from 'antd';
import { useDispatch } from 'react-redux';
import sliderImages from '@/assets/sliders';
import { ProductList } from '@/features/products/components/ProductList';
import { fetchProductApi } from '@/features/products/productSlice.js';
import { SelectItem } from '@/features/products/components/SelectItem';
import { Promotion } from '@/component/Promotion';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductApi());
  }, [dispatch]);
  return (
    <div className="max-w-330 mx-auto homepage">
      <div className="block-slide py-3 mb-5">
        <Carousel arrows infinite={true} autoplay>
          {sliderImages.map((item) => (
            <img key={item.id} src={item.src} alt={item.alt} loading="lazy" />
          ))}
        </Carousel>
      </div>
      <div className="text-right mb-8">
        <h3 className="text-center py-3 font-bold text-4xl mb-5">Featured Product</h3>
        <SelectItem />
      </div>
      <div className="mb-10">
        <ProductList />
      </div>
      <div className="mb-10">
        <h3 className="text-center py-3 font-bold text-4xl mb-5">Featured Product</h3>
        <Promotion />
      </div>
    </div>
  );
};

export default Home;
