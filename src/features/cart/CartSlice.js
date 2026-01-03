import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quantityCart: 0,
  modal: false,
  listCart: [],
};
export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = !state.modal;
    },
    addToCart: (state, action) => {
      const index = state.listCart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index == -1) {
        state.listCart.push({
          ...action.payload,
          quantity: 1
        });
      } else {
        state.listCart[index].quantity += 1
      }
    },
  },
});
export const { openModal,addToCart } = cartSlice.actions;
export default cartSlice.reducer;
