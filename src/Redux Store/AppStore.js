import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";
import cartReducer from "./cartSlice"
import addressReducer from "./addressStore"

export const Store=configureStore({
    reducer:{
        restaurant:restaurantReducer,
        cart:cartReducer,
        address:addressReducer
        
    }
})
