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

// fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4714457&lng=88.3844319&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')}`)
// .then(response => {
// 	if (response.ok) return response.json()
// 	throw new Error('Network response was not ok.')
// })
// .then(data => console.log(data.contents));



