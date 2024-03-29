import React, { Suspense } from "react";
import Navbar from "./Components/Header/Navbar";
import LogIn from "./Components/Hero/LogIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const LazyHome = React.lazy(() => import("./Page/Home"));
const LazySignin = React.lazy(() => import("./Components/Hero/Signin"));
const LazyCartSection = React.lazy(() => import("./Page/CartSection"));
const LazyMoodContainer = React.lazy(() =>
  import("./Components/Hero/MoodContainer")
);
const LazyTopResCardDetails = React.lazy(() =>
  import("./Components/Hero/TopRestaurantCardDetails")
);
const MyAccountComponent = React.lazy(() => import("./Page/MyProfile"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={""}>
          <LazyHome />
        </Suspense>
      ),
    },
    {
      path: "/home",
      element: <Navbar />,
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
      element: (
        <Suspense>
          <LazyCartSection Navbar={Navbar} />
        </Suspense>
        // <CartSection Navbar={Navbar}/>
      ),
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/signin",
      element: (
        <Suspense fallback={"Loading.."}>
          <LazySignin />
        </Suspense>
      ),
    },
    {
      path: "/restaurant/:userId",
      element: (
        <Suspense fallback={"Loading.."}>
          <LazyTopResCardDetails Navbar={Navbar} />
        </Suspense>
      ),
    },
    {
      path: "/my-account",
      element: (
        <Suspense fallback={<h1>Please wait</h1>}>
          <MyAccountComponent Navbar={Navbar} />
        </Suspense>
      ),
      children: [
        {
          path: "manage-address",
        },
        {
          path: "manage-orders",
        },
        {
          path: "favourites",
        },
        {
          path: "manage-payment",
        },
        {
          path: "my-settings",
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
