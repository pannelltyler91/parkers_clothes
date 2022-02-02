import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { cart: [], cartCount: 0, total: 0 },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload )
            let existingItem = state.cart.find((item) => item.name === action.payload.name)

            existingItem ?
                existingItem.quantity += 1
                :

                state.cart = [...state.cart, action.payload]
            state.total = state.total += action.payload.price
            state.cartCount = state.cartCount += 1
           


        },
        removeFromCart: (state, action) => {

        },
        clearCart: (state, action) => {

        },
        useDiscount: (state, action) => {

        }
    }
})

export const { addToCart, removeFromCart, clearCart, useDiscount } = cartSlice.actions;
export default cartSlice.reducer;