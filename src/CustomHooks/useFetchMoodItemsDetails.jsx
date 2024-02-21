import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMoodTodayData } from '../Redux Store/restaurantSlice';
// import { Mood_Item_Url } from '../constant';

const useFetchMoodItemsDetails = (url) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMoodItemData = async () => {
      try {
        const moodData = await fetch(url);
        const parsedData = await moodData.json();
        dispatch(addMoodTodayData(parsedData?.data))
      } catch (error) {
        console.error('Error fetching mood item data:', error);
      }
    };
    fetchMoodItemData();
  }, [dispatch,url]);
};

export default useFetchMoodItemsDetails;
