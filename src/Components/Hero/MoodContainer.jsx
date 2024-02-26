import React, { Suspense } from 'react'
import ShimmerEffect from '../../Utilities/ShimmerEffect'
import { useParams } from 'react-router-dom';
const MoodItemsContainer=React.lazy(()=>import("./MoodItemContainer"))
const MoodContainer = ({Navbar,isAuthetication}) => {
  const { userId } = useParams();

   console.log(userId)
  return (
    <div>
      {
            !isAuthetication?(<>
            <Navbar/>
            <Suspense fallback={<ShimmerEffect/>}>
            <MoodItemsContainer/>
            </Suspense>
            </>)
            :("Page is not exist")
        }
        {/* <Suspense fallback={"Load"}>
        <MoodItemsContainer user={userId}/>
        </Suspense> */}

    </div>
  )
}

export default MoodContainer