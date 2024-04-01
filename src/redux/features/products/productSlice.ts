import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from '../../../interface/products'
import pd from '../../../db/product.json'

export interface CounterState {
  products: Product[]
}

const initialState: CounterState = {
    products: [...pd],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    allProducts: (state) => {
        state.products = [...pd]
    },
      sortByPrice: (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload
    }
  },
})
export const { allProducts, sortByPrice } = productSlice.actions
export default productSlice.reducer