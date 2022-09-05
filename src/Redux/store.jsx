import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Feature/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
