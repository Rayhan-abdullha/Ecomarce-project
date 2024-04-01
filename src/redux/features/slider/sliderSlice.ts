import { createSlice } from '@reduxjs/toolkit'
import slidersImages from '../../../db/slideImage.json'

export interface SliderType {
    images: {
      images: string[]
  }
}

const initialState: SliderType = {
    images: slidersImages
}

export const slidersSlice = createSlice({
  name: 'sliders',
  initialState,
  reducers: {}
})
export default slidersSlice.reducer