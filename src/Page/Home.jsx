import React, { useEffect } from 'react'
import Navbar from '../Components/Header/Navbar'
import { MoodSectionComponent } from '../Components/Hero/MoodSection'
import TopRestaurant from '../Components/Hero/TopRestaurant'
import ResstaurantWithFoodDelivery from '../Components/Hero/ResstaurantWithFoodDelivery'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentRoute } from '../Redux Store/restaurantSlice'
const Home = ({isShow}) => {
  const location=useLocation();
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(setCurrentRoute(location.pathname));
  }, [dispatch, location.pathname]);
  return (
    <div>
      
        
          <Navbar/>
          <MoodSectionComponent/>
          <TopRestaurant/>
          <ResstaurantWithFoodDelivery/>
         
      
        
      
    </div>
  )
}

export default Home