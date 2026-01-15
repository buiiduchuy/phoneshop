import { Routes, Route } from 'react-router-dom';

import { UserLayout } from '@/layouts/UserLayout';
import { AdminLayout } from '@/layouts/AdminLayout';

import Home from '@/pages/Home';
import Admin from '@/pages/Admin';
import Detail from '@/pages/Detail';
import Login from '@/pages/Login';
import Notfound from '@/pages/NotFound';
import ProtectedRoute from '@/auth/ProtectedRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* login routes */}
      <Route path="/login" element={<Login/>} />

      {/* user routes */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Detail />}></Route>
      </Route>

      {/* protected admin routes */}
      <Route element={<ProtectedRoute requiredRole={'admin'} />}>
        <Route element={<AdminLayout />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Route>

      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
};
