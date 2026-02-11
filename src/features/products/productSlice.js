import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductApi } from './services/productService';

export const fetchProductApi = createAsyncThunk(
  'products/fetch',
  async () => {
    const res = await getProductApi();
    return res.data;
  },
  {
    condition: (_, { getState }) => {
      const { products } = getState();
      return Array.isArray(products.list) && products.list.length === 0;
    },
  }
);

const initialState = {
  list: JSON.parse(localStorage.getItem('products')) || [],
  filter: 'all',
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductApi.fulfilled, (state, action) => {
      state.list = action.payload;
      localStorage.setItem('products', JSON.stringify(action.payload));
    });
  },
});
export const { openModal, setFilter } = productSlice.actions;
export default productSlice.reducer;
