import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from './cartItemsSlice';

export const store = configureStore({
    reducer: {
        cartItems: cartItemsReducer,
    }
});