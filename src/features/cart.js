import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], cartCount: 0, total: 0 },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      let existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      existingItem
        ? (existingItem.quantity += 1)
        : (state.cart = [...state.cart, action.payload]);
      state.total = state.total += action.payload.price;
      state.cartCount = state.cartCount += 1;
      console.log(state.cart);
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      let itemToDelete = state.cart.find(
        (item) => item.id === action.payload.id
      );
      let newCart = state.cart.filter((item) => item.id !== action.payload.id);

      itemToDelete.quantity > 1
        ? (itemToDelete.quantity -= 1)
        : (state.cart = newCart);
      state.total = state.total -= itemToDelete.price;
      state.cartCount = state.cartCount -= 1;
    },
    clearCart: (state, action) => {
        state.cart = []
        state.cartCount = 0
        state.total = 0
    },
    useDiscount: (state, action) => {

    },
  },
});

export const { addToCart, removeFromCart, clearCart, useDiscount } =
  cartSlice.actions;
export default cartSlice.reducer;
