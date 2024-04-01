import { createSlice } from '@reduxjs/toolkit'
import categories from '../../../db/categoryList.json'
import { Category } from '../../../interface/categories'

export interface CounterState {
  catItems: Category[]
}

const initialState: CounterState = {
  catItems: categories,
}

export const categoriestSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {}
})
export default categoriestSlice.reducer