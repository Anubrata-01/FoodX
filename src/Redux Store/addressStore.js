import { createSlice } from "@reduxjs/toolkit";
// import AddressFeild from "../Page/AddressFeild";
const addressSlice=createSlice({
    name:"address",
    initialState:{
        AddressDetails:{
            "name":"",
            "Address":"",
            "City":"",
            "State":"",
            "Pin":""
        }
    },
    reducers:{
        updateAddressDetails: (state, action) => {
            state.AddressDetails.name = action.payload.name;
      state.AddressDetails.Address = action.payload.address;
      state.AddressDetails.City = action.payload.city;
      state.AddressDetails.State = action.payload.state;
      state.AddressDetails.Pin = action.payload.postalCode;
      
        },

    }
})
export const {updateAddressDetails}=addressSlice.actions;
export default addressSlice.reducer;