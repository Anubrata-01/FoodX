import React, { Suspense, } from "react";
import Navbar from "./Components/Header/Navbar";
import LogIn from "./Components/Hero/LogIn";
import Home from "./Page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./Components/Hero/Signin";
import { CartSection } from "./Page/CartSection";
const LazyMoodContainer = React.lazy(() =>
  import("./Components/Hero/MoodContainer")
);
const LazyTopResCardDetails = React.lazy(() =>
  import("./Components/Hero/TopRestaurantCardDetails")
);

function App() { 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Navbar/>,
    },
    {
      path: "/:userId",
      element: (
        <Suspense>
          <LazyMoodContainer Navbar={Navbar} />
        </Suspense>
      ),
    },
    {
      path: "/cart",
      element: <CartSection Navbar={Navbar} />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/restaurant/:userId",
      element: (
        <Suspense fallback={""}>
          <LazyTopResCardDetails Navbar={Navbar}/>
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
