import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/component/Header';
import { Footer } from '@/component/Footer';
import { CartModal } from '@/features/cart/components/CartModal';

export const UserLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header role="user"/>
      <main className='flex-1'>
        <CartModal/>
        <Outlet />
      </main>
      <Footer role="user" />
    </div>
  );
};
