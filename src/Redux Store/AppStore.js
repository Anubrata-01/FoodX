import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";

export const Store=configureStore({
    reducer:{
        restaurant:restaurantReducer,
        
    }
})