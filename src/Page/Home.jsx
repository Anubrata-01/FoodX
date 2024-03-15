// import React, { useEffect } from "react";
// import Navbar from "../Components/Header/Navbar";
// import { MoodSectionComponent } from "../Components/Hero/MoodSection";
// import TopRestaurant from "../Components/Hero/TopRestaurant";
// import ResstaurantWithFoodDelivery from "../Components/Hero/ResstaurantWithFoodDelivery";
// import { useLocation } from "react-router-dom";
// import { useDispatch,} from "react-redux";
// import { setCurrentRoute } from "../Redux Store/restaurantSlice";
// import styled from "styled-components";
// const Home = ({ isShow }) => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   // useFetchApi(foodApi);
//   useEffect(() => {
//     dispatch(setCurrentRoute(location.pathname));
//   }, [dispatch, location.pathname]);
//   // const Data = useSelector(store => store?.restaurant?.restaurantAPi);
//   // console.log(Data)

//   return (
//     <Container>
//       <Navbar isFixe={"fixed"} />
  
//       <MoodSectionComponent />
//       <TopRestaurant />
//       <ResstaurantWithFoodDelivery />
//     </Container>
//   );
// };
// const Container = styled.div`
//   /* overflow-x: hidden; */
//   /* width:100%; */
// `;
// export default Home;


import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "../Components/Header/Navbar";
import { MoodSectionComponent } from "../Components/Hero/MoodSection";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "../Redux Store/restaurantSlice";
import styled from "styled-components";

// Lazy load TopRestaurant component
const LazyTopRestaurant = lazy(() => import("../Components/Hero/TopRestaurant"));
// Lazy load ResstaurantWithFoodDelivery component
const LazyResstaurantWithFoodDelivery = lazy(() =>
  import("../Components/Hero/ResstaurantWithFoodDelivery")
);

const Home = ({ isShow }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentRoute(location.pathname));
  }, [dispatch, location.pathname]);

  return (
    <Container>
      <Navbar isFixe={"fixed"} />
      <MoodSectionComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyTopRestaurant />
        <LazyResstaurantWithFoodDelivery />
      </Suspense>
    </Container>
  );
};

const Container = styled.div`
  /* overflow-x: hidden; */
  /* width:100%; */
`;

export default Home;
