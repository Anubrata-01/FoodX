import React, { Suspense } from 'react'
import ShimmerEffect from '../../Utilities/ShimmerEffect'
const MoodItemContainer=React.lazy(()=>import("./MoodItemContainer"))
const MoodContainer = ({Navbar,isAuthetication}) => {
   console.log("ok rendr")
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