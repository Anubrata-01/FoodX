import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";
import cartReducer from "./cartSlice"

export const Store=configureStore({
    reducer:{
        restaurant:restaurantReducer,
        cart:cartReducer,
        
    }
})
