import { createSlice } from '@reduxjs/toolkit';
import { getCartStorage, saveCartStorage } from '@/utils/cartStorage';

const initialState = {
  modal: false,
  listCart: getCartStorage() || [],
};
export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
    clearModal: (state) => {
      state.listCart = [];
      saveCartStorage([]);
    },
    addToCart: (state, action) => {
      const index = state.listCart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index == -1) {
        state.listCart.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        state.listCart[index].quantity += 1;
      }
      saveCartStorage(state.listCart);
    },
    changeCartQuantity: (state, action) => {
      const index = state.listCart.findIndex((item) => item.id === action.payload.id);
      if (index == -1) return;
      if (action.payload.type === 'increase') {
        state.listCart[index].quantity += 1;
      }
      if (action.payload.type === 'decrease' && state.listCart[index].quantity > 1) {
        state.listCart[index].quantity -= 1;
      }
      saveCartStorage(state.listCart);
    },
    deleteItem: (state, action) => {
      const index = state.listCart.findIndex((item) => item.id === action.payload.id);
      if (index == -1) return;
      state.listCart = state.listCart.filter((item) => item.id !== action.payload.id);
      saveCartStorage(state.listCart);
    },
  },
});
export const { openModal, closeModal, clearModal, addToCart, changeCartQuantity, deleteItem } =
  cartSlice.actions;
export default cartSlice.reducer;
