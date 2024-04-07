import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface cartDataTypes {
    cartList: Array<string | undefined>
    totalAmount: number
}
  
const initialState: cartDataTypes = {
    cartList: JSON.parse(localStorage.getItem('your-cart') || '[]'),
    totalAmount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string>) => {
            const cartList: string[] = JSON.parse(localStorage.getItem('your-cart') || '[]');
            cartList.push(action.payload);
            localStorage.setItem('your-cart', JSON.stringify(cartList));
            state.cartList = [...state.cartList, action.payload]
        },
        removeItem(state, action) {
            state.cartList = state.cartList.filter((id) => id !== action.payload);
            localStorage.setItem('your-cart', JSON.stringify(state.cartList));
          },
    }
})

export const {addToCart, removeItem} = cartSlice.actions
export default cartSlice.reducer
