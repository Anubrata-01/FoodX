import { createSlice } from "@reduxjs/toolkit";
import { useLocation,} from "react-router-dom";
const restaurantSlice=createSlice({
    name:"Restaurant",
    initialState:{
        restaurantAPi:null,
        moodToday:null,
        topRestaurant:null,
        resCardDetails:null,
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
        addResCardDetails:(state,action)=>{
            state.resCardDetails=action.payload;
        },
        isDisplay:(state,action)=>{
            state.display=action.payload
        }
    }
})
export const{addMoodTodayData,addTopRestaurant,addDataTorestaurantApi,isDisplay,addResCardDetails}=restaurantSlice.actions;
export default restaurantSlice.reducer;