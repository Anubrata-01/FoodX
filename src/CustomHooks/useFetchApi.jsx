import { useEffect,} from "react"
import { useDispatch } from "react-redux"
import { addMoodToday } from "../Redux Store/restaurantSlice";
const useFetchApi=(foodApi)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const MoodData=async()=>{
            const data=await fetch(foodApi);
            const parseData=await data.json();
            const filterData=
              parseData?.data?.cards?.filter((item)=>item?.card?.card?.header?.title ==="What's on your mind?");
         
            dispatch(addMoodToday(filterData))
            
        }
MoodData()
    },[])
}
export default useFetchApi;