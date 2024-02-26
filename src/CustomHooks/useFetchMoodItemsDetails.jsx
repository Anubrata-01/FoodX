import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMoodTodayData } from '../Redux Store/restaurantSlice';
import React from 'react';
// import { Mood_Item_Url } from '../constant';

const useFetchMoodItemsDetails = (userId) => {
  const dispatch = useDispatch();
  const Mood_Item_Url =React.useMemo(()=>`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4714457&lng=88.3844319&collection=${userId}&tags=layout_CCS_Dosa&type=rcv2`,[userId]);

  useEffect(() => {
    const fetchMoodItemData = async () => {
      try {
        const moodData = await fetch(Mood_Item_Url);
        const parsedData = await moodData.json();
        dispatch(addMoodTodayData(parsedData?.data))
      } catch (error) {
        console.error('Error fetching mood item data:', error);
      }
    };
    fetchMoodItemData();
  }, [dispatch,Mood_Item_Url]);
};

export default useFetchMoodItemsDetails;
