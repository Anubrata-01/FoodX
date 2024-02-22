import Navbar from './Components/Header/Navbar';
import LogIn from './Components/Hero/LogIn';
// import "./App.css"
import MoodContainer from './Components/Hero/MoodContainer';
import MoodItemContainer from './Components/Hero/MoodItemContainer';
import Home from './Page/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
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
    
  ])
  return (
    
      <RouterProvider router={router}/>
   
  );
}

export default App;
