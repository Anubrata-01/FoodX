import { createSlice } from "@reduxjs/toolkit";
const restaurantSlice=createSlice({
    name:"Restaurant",
    initialState:{
        restaurantAPi:null,
        moodToday:null,
        topRestaurant:null,
        display:null,
    },
    reducers:{
        addDataTorestaurantApi:(state,action)=>{
            state.restaurantAPi=action.payload
        },
        addMoodTodayData:(state,action)=>{
            if(state.moodToday == null){
            state.moodToday=action.payload;
            }
            state.moodToday=action.payload
        },
        addTopRestaurant:(state,action)=>{
            if(!state.topRestaurant){
                state.topRestaurant=action.payload;
            }
        },
        isDisplay:(state,action)=>{
            state.display=action.payload
        }
    }
})
export const{addMoodTodayData,addTopRestaurant,addDataTorestaurantApi,isDisplay}=restaurantSlice.actions;
export default restaurantSlice.reducer;