import { createSlice } from "@reduxjs/toolkit";
const restaurantSlice = createSlice({
  name: "Restaurant",
  initialState: {
    restaurantAPi: null,
    moodToday: null,
    topRestaurant: null,
    resCardDetails: null,
    display: null,
    currentRoute: null,
    userDetails: null,
    isLogged: false,
    userId: null,
  },
  reducers: {
    addDataTorestaurantApi: (state, action) => {
      state.restaurantAPi = action.payload;
    },
    addMoodTodayData: (state, action) => {
      if (!state.moodToday) {
        state.moodToday = action.payload;
        // state.userId=isUserId;
      } else {
        state.moodToday = null;
      }
    },
    addTopRestaurant: (state, action) => {
      if (!state.topRestaurant) {
        state.topRestaurant = action.payload;
      }
    },
    addResCardDetails: (state, action) => {
      state.resCardDetails = action.payload;
    },
    isDisplay: (state, action) => {
      state.display = action.payload;
    },
    setCurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
      if (state.currentRoute === state.userId) {
        // Dispatch action to add mood data
        // state.moodToday = action.payload;

        console.log(state);
      } else {
        // Set moodToday to null
        state.moodToday = null;
        state.resCardDetails = null;
        state.restaurantAPi = null;
      }
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
      // state.isLogged=action.payload;
    },
    removeUserDetails:(state,action)=>{
      state.userDetails=[];
  },
    setisLogged: (state, action) => {
      state.isLogged = action.payload;
      // state.isLogged=action.payload;
    },
    addUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const {
  addMoodTodayData,
  addTopRestaurant,
  addDataTorestaurantApi,
  isDisplay,
  addResCardDetails,
  setCurrentRoute,
  setUserDetails,
  removeUserDetails,
  setisLogged,
  addUserId
} = restaurantSlice.actions;
export default restaurantSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const restaurantSlice = createSlice({
//   name: "Restaurant",
//   initialState: {
//     restaurantAPi: null,
//     moodToday: null,
//     topRestaurant: null,
//     resCardDetails: null,
//     display: null,
//     currentRoute: null,
//     userDetails: null,
//     isLogged: false,
//     userId: null,
//   },
//   reducers: {
//     addDataTorestaurantApi: (state, action) => {
//       state.restaurantAPi = action.payload;
//     },
//     addMoodTodayData: (state, action) => {
//       if (!state.moodToday) {
//         state.moodToday = action.payload;
//       } else {
//         state.moodToday = null;
//       }
//     },
//     addTopRestaurant: (state, action) => {
//       if (!state.topRestaurant) {
//         state.topRestaurant = action.payload;
//       }
//     },
//     addResCardDetails: (state, action) => {
//       state.resCardDetails = action.payload;
//     },
//     isDisplay: (state, action) => {
//       state.display = action.payload;
//     },
//     setCurrentRoute: (state, action) => {
//       state.currentRoute = action.payload;
//       if (state.currentRoute === state.userId) {
//         console.log(state);
//       } else {
//         state.moodToday = null;
//         state.resCardDetails = null;
//         state.restaurantAPi = null;
//       }
//     },
//     setUserDetails: (state, action) => {
//       state.userDetails = action.payload;
//     },
//     setisLogged: (state, action) => {
//       state.isLogged = action.payload;
//     },
//     addUserId: (state, action) => {
//       state.userId = action.payload;
//     },
//   },
// });

// export const {
//   addMoodTodayData,
//   addTopRestaurant,
//   addDataTorestaurantApi,
//   isDisplay,
//   addResCardDetails,
//   setCurrentRoute,
//   setUserDetails,
//   setisLogged,
//   addUserId,
// } = restaurantSlice.actions;

// // Configure the persist options
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['isLogged', 'userId'], // Specify the states to be persisted
// };

// // Create a persisted reducer
// const persistedReducer = persistReducer(persistConfig, restaurantSlice.reducer);

// export default persistedReducer; // Export the persisted reducer

