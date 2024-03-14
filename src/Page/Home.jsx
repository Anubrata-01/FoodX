import React, { useEffect } from "react";
import Navbar from "../Components/Header/Navbar";
import { MoodSectionComponent } from "../Components/Hero/MoodSection";
import TopRestaurant from "../Components/Hero/TopRestaurant";
import ResstaurantWithFoodDelivery from "../Components/Hero/ResstaurantWithFoodDelivery";
import { useLocation } from "react-router-dom";
import { useDispatch,} from "react-redux";
import { setCurrentRoute } from "../Redux Store/restaurantSlice";
import styled from "styled-components";
// import useFetchApi from "../CustomHooks/useFetchApi";
// import { foodApi } from "../constant";
const Home = ({ isShow }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  // useFetchApi(foodApi);

  useEffect(() => {
    dispatch(setCurrentRoute(location.pathname));
  }, [dispatch, location.pathname]);
  // const Data = useSelector(store => store?.restaurant?.restaurantAPi);
  // console.log(Data)

  return (
    <Container>
      <Navbar isFixe={"fixed"} />
      {/* {
            Data?(<>
            <MoodSectionComponent/>
          <TopRestaurant/>
          <ResstaurantWithFoodDelivery/>
            </>):(<>
            <h1 className=' mt-32'>Data not found</h1>
            </>)
          } */}
      <MoodSectionComponent />
      <TopRestaurant />
      <ResstaurantWithFoodDelivery />
    </Container>
  );
};
const Container = styled.div`
  /* overflow-x: hidden; */
  /* width:100%; */
`;
export default Home;
