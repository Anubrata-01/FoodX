import { createSlice } from "@reduxjs/toolkit";
const restaurantSlice=createSlice({
    name:"Restaurant",
    initialState:{
        restaurantAPi:null,
        moodToday:null,
        topRestaurant:null,
    },
    reducers:{
        addDataTorestaurantApi:(state,action)=>{
            state.restaurantAPi=action.payload
        },
        addMoodToday:(state,action)=>{
            state.moodToday=action.payload
        },
        addTopRestaurant:(state,action)=>{
            if(!state.topRestaurant){
                state.topRestaurant=action.payload;
            }
        }
    }
})
export const{addMoodToday,addTopRestaurant,addDataTorestaurantApi}=restaurantSlice.actions;
export default restaurantSlice.reducer;