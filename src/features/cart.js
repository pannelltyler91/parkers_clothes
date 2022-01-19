import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'cart',
    initialState:{cart:[],cartCount:0,total:0},
    reducers:{
        addToCart:(state,action) =>{

        },
        removeFromCart:(state,action) =>{

        },
        clearCart:(state,action) =>{

        },
        useDiscount:(state,action) =>{

        }
    }
})

export const{addToCart,removeFromCart,clearCart,useDiscount} = cartSlice.actions;
export default cartSlice.reducer;