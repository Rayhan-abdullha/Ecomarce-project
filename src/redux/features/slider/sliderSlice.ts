import { createSlice } from '@reduxjs/toolkit'
import slidersImages from '../../../db/slideImage.json'

export interface SliderType {
    images: string[]
}

const initialState: SliderType = {
    images: slidersImages.images
}

export const slidersSlice = createSlice({
  name: 'sliders',
  initialState,
  reducers: {}
})
export default slidersSlice.reducer