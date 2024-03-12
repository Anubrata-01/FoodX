import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMoodTodayData } from '../Redux Store/restaurantSlice';
import React from 'react';
// import { Mood_Item_Url } from '../constant';

const useFetchMoodItemsDetails = (userId) => {
  const dispatch = useDispatch();
  const Mood_Item_Url =React.useMemo(()=>`https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D22.469788246717883%26lng%3D88.3891574665904%26collection%3D${userId}%26tags%3Dlayout_CCS_Biryani%26sortBy%3D%26filters%3D%26type%3Drcv2%26offset%3D0%26page_type%3Dnull`,[userId]);

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
