import React from 'react';
import { useEffect } from 'react';
import { Carousel } from 'antd';
import { useDispatch } from 'react-redux';
import sliderImages from '@/assets/sliders';
import { ProductList } from '@/features/products/components/ProductList';
import { fetchProduct } from '@/features/products/productSlice.js';
import { SelectItem } from '@/features/products/components/SelectItem';
import { Promotion } from '@/component/Promotion';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <div className="max-w-330 mx-auto homepage px-4">
      <div className="block-slide py-3 mb-5">
        <Carousel arrows infinite={true} autoplay>
          {sliderImages.map((item) => (
            <img key={item.id} src={item.src} alt={item.alt} loading="lazy" />
          ))}
        </Carousel>
      </div>
      <div className="text-right mb-8">
        <h3 className="text-center py-3 font-bold text-2xl mb-5 md:text-4xl">Featured Product</h3>
        <SelectItem />
      </div>
      <div className="mb-10">
        <ProductList />
      </div>
      <div className="mb-10">
        <h3 className="text-center py-3 font-bold text-2xl mb-5 md:text-4xl">Featured Product</h3>
        <Promotion />
      </div>
    </div>
  );
};

export default Home;
