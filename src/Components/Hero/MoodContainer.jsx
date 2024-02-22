import React, { Suspense } from 'react'
import ShimmerEffect from '../../Utilities/ShimmerEffect'
// import MoodItemContainer from './MoodItemContainer'
const MoodItemContainer=React.lazy(()=>import("./MoodItemContainer"))
const MoodContainer = ({Navbar,isAuthetication}) => {
   
  return (
    <div>{
            !isAuthetication?(<>
            <Navbar/>
            <Suspense fallback={<ShimmerEffect/>}>
            <MoodItemContainer/>
            </Suspense>
            </>)
            :("Page is not exist")
        }

    </div>
  )
}

export default MoodContainer