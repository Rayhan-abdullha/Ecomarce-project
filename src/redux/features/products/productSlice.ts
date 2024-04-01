import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import pd from '../../../db/product.json'
import { Product } from '../../../interface/products'

export interface ProductType {
  products: Product[]
}

const initialState: ProductType = {
    products: pd
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
      sortByPrice: (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload
    }
  },
})
export const { sortByPrice } = productSlice.actions
export default productSlice.reducer