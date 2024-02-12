import { createSlice } from "@reduxjs/toolkit";
const restaurantSlice=createSlice({
    name:"Restaurant",
    initialState:{
        moodToday:null,
    },
    reducers:{
        addMoodToday:(state,action)=>{
            state.moodToday=action.payload
        }
    }
})
export const{addMoodToday}=restaurantSlice.actions;
export default restaurantSlice.reducer;