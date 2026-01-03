import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {openModal} from "@/features/cart/cartSlice"

export const Header = (props) => {
  const {role} = props;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <header className="shadow shadow-gray-400">
      <nav className="bg-white">
        <div className="max-w-330 max-w- mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold">LOGO</Link>
          {
            role=='user'? <>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="btn-home text-gray-700 font-semibold uppercase relative">Home</a>
                {/* Cart */}
                <Button className="relative text-gray-700" icon={<ShoppingCartOutlined className="text-2xl" onClick={()=>dispatch(openModal())}/>} type='text'>
                    <span className="absolute -top-1 -right-1 bg-gray-500 text-white text-xs px-1.5 rounded-full">0</span>
                </Button>
                <Link to="/admin" className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">Admin </Link>
              </div>
            </> : <>
            <Link to="/" className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">Shop </Link>
            </>
          }
          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden px-4 pb-4 space-y-3">
           {
            role=='user'? <>
              <Link to="#" className="block text-gray-700">Home</Link>
              <Link to="/admin" className="block text-center bg-gray-600 text-white py-2 rounded-md">Admin</Link>
            </> : <></>
           }
            <Link to="/shop" className="block text-center bg-gray-600 text-white py-2 rounded-md">Shop</Link>
          </div>
        )}
      </nav>
    </header>
  );
};
