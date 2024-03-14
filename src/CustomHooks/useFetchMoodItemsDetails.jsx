import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMoodTodayData } from '../Redux Store/restaurantSlice';
import React from 'react';
// import { Mood_Item_Url } from '../constant';

const useFetchMoodItemsDetails = (userId) => {
  const dispatch = useDispatch();
  const Mood_Item_Url =React.useMemo(()=>`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.469788246717883&lng=88.3891574665904&collection=${userId}&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null`,[userId]);

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
