import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    inventory: [
      { id: 1, name: "Bucket Hat", price: 7, quantity: 0 },
      { id: 2, name: "Sombrero", price: 15, quantity: 0 },
      { id: 3, name: "Head Scarf", price: 8, quantity: 0 },
    ],
    colors:['red','blue','green','yellow'],
    sizes:['s','m','l','xl']
  },
  reducers: {},
});

export default inventorySlice.reducer;
