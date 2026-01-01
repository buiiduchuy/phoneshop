import React from 'react'
import { Outlet } from 'react-router-dom';
import {Header} from '@/component/Header'
import {Footer} from '@/component/Footer'
import { ModalCart } from '@/component/ModalCart';

export const UserLayout = () => {

  return (
   <>
      <Header role='user'/>
      <main className="min-h-screen">
        <ModalCart/>
        <Outlet />
      </main>
      <Footer role='user'/>
    </>
  )
}
