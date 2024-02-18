import { useEffect,} from "react"
import { useDispatch } from "react-redux"
import { addDataTorestaurantApi} from "../Redux Store/restaurantSlice";
const useFetchApi=(foodApi)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const MoodData=async()=>{
            const data=await fetch(foodApi);
            const parseData=await data.json();
            dispatch(addDataTorestaurantApi(parseData))
            
        }
MoodData()
    },[foodApi,dispatch])
}
export default useFetchApi;