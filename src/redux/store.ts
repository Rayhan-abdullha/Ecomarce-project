import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/products/productSlice'
import categoryReducer from './features/categories/categoriesSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    categoriesList: categoryReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch