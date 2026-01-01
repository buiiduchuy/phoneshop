import {configureStore} from "@reduxjs/toolkit"
import producReducer from "@/features/products/productSlice"

export const store = configureStore({
  reducer: {
    products: producReducer,
  },
})