import React from 'react'
import Navbar from '../Components/Header/Navbar'
import MoodSection from '../Components/Hero/MoodSection'
import TopRestaurant from '../Components/Hero/TopRestaurant'
import ResstaurantWithFoodDelivery from '../Components/Hero/ResstaurantWithFoodDelivery'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <MoodSection/>
        <TopRestaurant/>
        <ResstaurantWithFoodDelivery/>
    </div>
  )
}

export default Home