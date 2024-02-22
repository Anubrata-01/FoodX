import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { MoodSectionComponent } from '../Components/Hero/MoodSection'
import TopRestaurant from '../Components/Hero/TopRestaurant'
import ResstaurantWithFoodDelivery from '../Components/Hero/ResstaurantWithFoodDelivery'
const Home = ({isShow}) => {
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