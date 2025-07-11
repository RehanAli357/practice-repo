import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState } from "./types";

const initialState: CartState = {
  cartId: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: number }>) => {
      if (!state.cartId.includes(action.payload.id)) {
        state.cartId.unshift(action.payload.id);
      }
    },
    removeToCart: (state, action: PayloadAction<{ id: number }>) => {
      state.cartId = state.cartId.filter((id) => id !== action.payload.id);
    },
    emptyCart: (state) => {
      state.cartId=[];
    },
  },
});

export const { addToCart, emptyCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
