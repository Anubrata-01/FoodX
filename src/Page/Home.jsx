import React from 'react'
import Navbar from '../Components/Header/Navbar'
import MoodSection from '../Components/Hero/MoodSection'
import TopRestaurant from '../Components/Hero/TopRestaurant'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <MoodSection/>
        <TopRestaurant/>
    </div>
  )
}

export default Home