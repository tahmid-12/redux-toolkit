import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems,
    amount: 2,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId)
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId)
            cartItem.amount = cartItem.amount - 1;
        }
    }
});


export default cartSlice.reducer;
export const { clearCart,removeItem, increase, decrease } = cartSlice.actions;