import { createSlice } from "@reduxjs/toolkit";
const restaurantSlice=createSlice({
    name:"Restaurant",
    initialState:{
        restaurantAPi:null,
        moodToday:null,
        topRestaurant:null,
        resCardDetails:null,
        display:null,
        currentRoute:null,
        userDetails:null,
        isLogged:false,
    },
    reducers:{
        addDataTorestaurantApi:(state,action)=>{
            state.restaurantAPi=action.payload
        },
        addMoodTodayData:(state,action)=>{
            if(!state.moodToday){
            state.moodToday=action.payload;
            // state.userId=isUserId;
            }
            else{
                state.moodToday=null
            }
            
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
                // state.moodToday = action.payload;
                
                console.log(state)
            } else {
                // Set moodToday to null
                state.moodToday = null;
                state.resCardDetails=null;
                state.restaurantAPi=null
            }
          },
        setUserDetails:(state,action)=>{
            state.userDetails=action.payload;
            // state.isLogged=action.payload;
        },
        setisLogged:(state,action)=>{
            state.isLogged=action.payload;
            // state.isLogged=action.payload;
        }
    }
})
export const{addMoodTodayData,addTopRestaurant,addDataTorestaurantApi,isDisplay,addResCardDetails,setCurrentRoute,setUserDetails,setisLogged}=restaurantSlice.actions;
export default restaurantSlice.reducer;