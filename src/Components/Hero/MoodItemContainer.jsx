import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchMoodItemsDetails from '../../CustomHooks/useFetchMoodItemsDetails';

const MoodItemContainer = () => {
    const { userId }=useParams();
  const Mood_Item_Url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4714457&lng=88.3844319&collection=${userId}&tags=layout_CCS_Dosa&type=rcv2`
    useFetchMoodItemsDetails(Mood_Item_Url);
   
  return (
    <div>MoodItemContainer</div>
  )
}

export default React.memo( MoodItemContainer)