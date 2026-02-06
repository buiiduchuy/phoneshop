import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductApiById } from '@/features/products/services/productService';
import { Button, Skeleton } from 'antd';
import { CountDown } from '@/component/CountDown';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/cart/CartSlice';
import { toastify } from '@/utils/toastify';
import { TabInfomationDetail } from '@/component/TabInfomationDetail';

const Detail = () => {
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

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
        <section className="detail-product flex mb-10">
          <aside className="detail-left flex-1 pr-2.5">
            <figure>
              <img
                src={`${prod.img}`}
                alt={`${prod.name}`}
                className="w-full max-w-[80%] mx-auto"
              />
            </figure>
          </aside>
          <aside className="detail-right flex-1">
            <div className="text-base">
              <h3 className="text-2xl mb-2.5 font-bold">{prod.name}</h3>
              <p className="mb-2.5 -indent-30 pl-30">
                <span className="font-bold text-xl">Description</span> : {prod.desc}
              </p>
            </div>
            <div className="infoPromotion py-5 px-2.5 rounded-[10px] text-white">
              <div className="flex justify-between mb-5">
                <div>
                  <p className="text-sm">Online Giá Rẻ Quá</p>
                  <p className="text-xl font-bold">${prod.price}</p>
                </div>
                <div>
                  <p className="text-sm">Kết thúc vào</p>
                  <CountDown hour={10} />
                </div>
              </div>
              <div className="bg-gray-600 p-2.5 rounded-[5px]">
                <h4 className="mb-5">Promotions</h4>
                <ul className="py-5 border-dashed border-t ps-2.5 list-disc">
                  <li>Prices and promotions may end earlier than expected</li>
                  <li>Receive a 100 USD Apple Watch voucher</li>
                  <li>Receive a 150 USD VND Macbook voucher</li>
                  <li>Receive a 500 USD VND Airpods voucher</li>
                </ul>
                <ul className="py-5 border-dashed border-t ps-2.5 list-disc">
                  <li>Fast delivery (depending on area)</li>
                  <li>Each phone number is limited to purchasing 3 products per month</li>
                  <li>Prices and promotions may end early</li>
                </ul>
                <Button
                  size="large"
                  color="danger"
                  variant="solid"
                  className="w-full"
                  style={{ paddingBlock: '25px', fontSize: '18px', fontWeight: 'medium' }}
                  onClick={() => (
                    dispatch(addToCart(prod)),
                    toastify('Added to cart successfully')
                  )}
                >
                  Buy
                </Button>
              </div>
            </div>
          </aside>
        </section>
        <section className="info-product">
          <TabInfomationDetail prod={prod} />
        </section>
      </div>
    </div>
  );
};

export default Detail;
