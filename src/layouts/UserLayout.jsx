import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/component/Header';
import { Footer } from '@/component/Footer';
import { CartModal } from '@/features/cart/components/CartModal';

export const UserLayout = () => {
  return (
    <>
      <Header role="user" />
      <main className="min-h-screen">
        <CartModal/>
        <Outlet />
      </main>
      <Footer role="user" />
    </>
  );
};
