import { Routes , Route } from "react-router-dom";

import { UserLayout } from "@/layouts/UserLayout";
import { AdminLayout } from "@/layouts/AdminLayout";

import { Home } from "@/pages/Home";
import { Admin } from "@/pages/Admin";

export const AppRoutes = () => {
  return (
    <Routes>

      {/* user routes */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />}></Route>
      </Route>

      {/* admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />}></Route>
      </Route>

    </Routes>
  )
}
