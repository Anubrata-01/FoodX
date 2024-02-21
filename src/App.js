import Navbar from './Components/Header/Navbar';
import MoodItemContainer from './Components/Hero/MoodItemContainer';
import Home from './Page/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

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
      path:"/mood/:userId",
      element:<MoodItemContainer/>
    }
  ])
  return (
    
      <RouterProvider router={router}/>
   
  );
}

export default App;
