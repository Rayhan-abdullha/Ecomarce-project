import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/products/productSlice'
import categoryReducer from './features/categories/categoriesSlice'
import { slidersSlice } from './features/slider/sliderSlice'
import offerSlice from './features/offers/offerSlice'
import cartSlice from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    categoriesList: categoryReducer,
    sliders: slidersSlice.reducer,
    offers: offerSlice,
    cart: cartSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch