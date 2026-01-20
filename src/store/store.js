import { configureStore } from '@reduxjs/toolkit';
import producReducer from '@/features/products/productSlice';
import cartReducer from '@/features/cart/CartSlice';

export const store = configureStore({
  reducer: {
    products: producReducer,
    cart: cartReducer,
  },
});
