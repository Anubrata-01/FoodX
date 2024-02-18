import Navbar from './Components/Header/Navbar';
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
    }
  ])
  return (
    
      <RouterProvider router={router}/>
   
  );
}

export default App;
