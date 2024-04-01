import { createSlice } from '@reduxjs/toolkit'
import categories from '../../../db/categoryList.json'

export interface CategoryState {
  catItems: unknown[]
}

const initialState: CategoryState = {
  catItems: categories,
}

export const categoriestSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {}
})
export default categoriestSlice.reducer