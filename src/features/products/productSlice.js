import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getProductApi} from './services/productService'

export const fetchProductApi = createAsyncThunk(
  'product/fetch',
  async (_,thunkAPI)=> {
    try {
      const res = await getProductApi();
      return res.data
    } catch (error) {
      console.log("error: ", error);
      return thunkAPI.rejectWithValue('Không thể tải sản phẩm');
    }
  }
)

const initialState = {
  modal: false,
  list: [],
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    openModal: (state)=>{
      state.modal = !state.modal
    }
  },
  extraReducers: (builder)=>{
    builder
            .addCase(fetchProductApi.fulfilled,(state,action)=>{
              state.list = action.payload
            })
  }
})
export const { openModal} = productSlice.actions
export default productSlice.reducer;