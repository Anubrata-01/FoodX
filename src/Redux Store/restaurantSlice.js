import { createSlice } from "@reduxjs/toolkit";
const restaurantSlice=createSlice({
    name:"Restaurant",
    initialState:{
        restaurantAPi:null,
        moodToday:null,
        topRestaurant:null,
        resCardDetails:null,
        display:null,
        currentRoute:null
    },
    reducers:{
        addDataTorestaurantApi:(state,action)=>{
            state.restaurantAPi=action.payload
        },
        addMoodTodayData:(state,action)=>{
            if(state.moodToday == null){
            state.moodToday=action.payload;
            // state.userId=isUserId;
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
        },
        setCurrentRoute: (state, action) => {
            state.currentRoute = action.payload;
            if (state.currentRoute === state.userId) {
                // Dispatch action to add mood data
                state.moodToday = action.payload;
                console.log(state)
            } else {
                // Set moodToday to null
                state.moodToday = null;
            }
          },
    }
})
export const{addMoodTodayData,addTopRestaurant,addDataTorestaurantApi,isDisplay,addResCardDetails,setCurrentRoute}=restaurantSlice.actions;
export default restaurantSlice.reducer;