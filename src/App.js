import React, { Suspense } from 'react';
import Navbar from './Components/Header/Navbar';
import LogIn from './Components/Hero/LogIn';
// import "./App.css"
import MoodContainer from './Components/Hero/MoodContainer';
import Home from './Page/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
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
      element:<MoodContainer Navbar={Navbar} isAuthentication={isAuthentication}/>
    },
    {
      path:"/login",
      element:<LogIn/>
    },
    {
      path:"/restaurant/:userId",
      element:<Suspense fallback={"Loading.."}><LazyTopResCardDetails Navbar={Navbar} isAuthentication={isAuthentication}/></Suspense>
    }
    
  ])
  return (
    
      <RouterProvider router={router}/>
   
  );
}

export default App;
