import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/products/productSlice'
import categoryReducer from './features/categories/categoriesSlice'
import { slidersSlice } from './features/slider/sliderSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    categoriesList: categoryReducer,
    sliders: slidersSlice.reducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch