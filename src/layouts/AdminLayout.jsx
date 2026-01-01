import React from 'react'
import { Header } from '@/component/Header'
import { Footer } from '@/component/Footer'
import { Outlet } from 'react-router-dom'

export const AdminLayout = () => {
  return (
    <div className="min-h-screen">
      <Header role='admin'/>
      <main className="min-h-screen">
        <Outlet />
      </main>
       <Footer role='admin'/>
    </div>
  )
}
