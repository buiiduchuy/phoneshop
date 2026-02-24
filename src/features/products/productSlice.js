import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getProductApi,
  createProductApi,
  editProductApi,
  deleteProductApi,
} from './services/productService';

export const fetchProduct = createAsyncThunk(
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

export const createProduct = createAsyncThunk('products/create', async (payload) => {
  const res = await createProductApi(payload);
  return res.data;
});

export const updateProduct = createAsyncThunk('products/update', async ({ id, payload }) => {
  const res = await editProductApi(id, payload);
  return res.data;
});
export const deleteProduct = createAsyncThunk('products/detele', async (id) => {
  const res = await deleteProductApi(id);
  return res.data;
});

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
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.list = action.payload;
      localStorage.setItem('products', JSON.stringify(action.payload));
    });
  },
});
export const { openModal, setFilter } = productSlice.actions;
export default productSlice.reducer;
