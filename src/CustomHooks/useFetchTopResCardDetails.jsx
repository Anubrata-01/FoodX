import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addResCardDetails } from '../Redux Store/restaurantSlice'

const useFetchTopResCardDetails = (url) => {
const dispatch=useDispatch();

 useEffect(()=>{
    const resCardDetails=async()=>{
        const data=await fetch(url);
        const parsedata=await data.json();
        dispatch(addResCardDetails(parsedata))
    }
    resCardDetails();
 },[])
}

export default useFetchTopResCardDetails