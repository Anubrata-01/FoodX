import React, { Suspense } from 'react'
import ShimmerEffect from '../../Utilities/ShimmerEffect'
import { useParams } from 'react-router-dom';
const MoodItemsContainer=React.lazy(()=>import("./MoodItemContainer"))
const MoodContainer = ({Navbar}) => {
  const { userId } = useParams();

   console.log(userId)
  return (
    <div>
            <Navbar/>
            <Suspense fallback={<ShimmerEffect/>}>
            <MoodItemsContainer/>
            </Suspense>

    </div>
  )
}

export default MoodContainer