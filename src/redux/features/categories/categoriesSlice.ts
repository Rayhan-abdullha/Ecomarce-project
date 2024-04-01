import { createSlice } from '@reduxjs/toolkit'
import { Category } from '../../../interface/categories'

export interface CategoryState {
  catItems: Category[]
}

const initialState: CategoryState = {
  catItems: [],
}

export const categoriestSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {}
})
export default categoriestSlice.reducer