import React, { StrictMode, Suspense } from 'react';
import Navbar from './Components/Header/Navbar';
import LogIn from './Components/Hero/LogIn';
import Home from './Page/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Signin from './Components/Hero/Signin';
const LazyMoodContainer=React.lazy(()=>import("./Components/Hero/MoodContainer"))
const LazyMoodItemsContainer=React.lazy(()=>import("./Components/Hero/MoodItemContainer"))

const LazyTopResCardDetails=React.lazy(()=>import("./Components/Hero/TopRestaurantCardDetails"))
const isAuthentication=()=>{
  return true;
}
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/home",
      element:<Navbar/>
    },
    {
      path:"/:userId",
      element:<Suspense ><LazyMoodContainer Navbar={Navbar} isAuthentication={isAuthentication}/></Suspense>
    },
    {
      path:"/login",
      element:<LogIn/>
    },
    {
      path:"/signin",
      element:<Signin/>
    },
    {
      path:"/restaurant/:userId",
      element:<Suspense fallback={""}><LazyTopResCardDetails Navbar={Navbar} isAuthentication={isAuthentication}/></Suspense>
    }
    
  ])
  return (
   

   
      <RouterProvider router={router}/>
    
  );
}

export default App;
