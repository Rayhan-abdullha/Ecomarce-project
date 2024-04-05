import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface cartDataTypes {
    cartList: Array<string | undefined>
}
  
const initialState: cartDataTypes = {
    cartList: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string | undefined>) => {
            state.cartList = [...state.cartList, action.payload]
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
