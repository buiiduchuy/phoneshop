import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartButton } from './CartButton';

export const Header = (props) => {
  const { role } = props;
  const [open, setOpen] = useState(false);
  return (
    <header className="shadow shadow-gray-400 sticky top-0 w-full z-50">
      <nav className="bg-white">
        <div className="max-w-330 max-w- mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold">
            LOGO
          </Link>
          {role == 'user' ? (
            <div className="md:flex items-center gap-6 ml-auto md:ml-0">
              {/* Cart */}
              <CartButton />
              <Link
                to="/admin"
                className="md:block hidden min-w-20 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-center"
              >
                Admin
              </Link>
            </div>
          ) : (
            <Link
              to="/"
              className="md:block hidden min-w-20 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-center"
            >
              Shop
            </Link>
          )}
          {/* Mobile toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden px-4 overflow-hidden
            transition-all duration-300 ease-in-out
            ${open ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}
          `}
        >
          {role == 'user' ? (
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="block text-center bg-gray-600 text-white py-2 rounded-md"
            >
              Admin
            </Link>
          ) : (
            <Link to="/" className="block text-center bg-gray-600 text-white py-2 rounded-md">
              Shop
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};
