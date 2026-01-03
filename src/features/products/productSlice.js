import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductApi } from './services/productService';

export const fetchProductApi = createAsyncThunk('products/fetch',
  async () => getProductApi(),
  {
    condition: (_, { getState }) => {
      const { products } = getState();
      return products.list.length === 0;
    },
  }
);

const initialState = {
  list: JSON.parse(localStorage.getItem('products')) || [],
  loading: false,
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProductApi.fulfilled, (state, action) => {
      state.list = action.payload;
      localStorage.setItem('products', JSON.stringify(action.payload));
    });
  },
});
export const { openModal } = productSlice.actions;
export default productSlice.reducer;
