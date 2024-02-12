import React from 'react';
import useFetchApi from '../../CustomHooks/useFetchApi';
import { CDN_url, foodApi } from '../../constant';
import { useSelector } from 'react-redux';

const MoodSection = () => {
  useFetchApi(foodApi);
  const startTime = performance.now();
  const moodToday = useSelector(store => store?.restaurant?.moodToday);
  const headerTitle = React.useMemo(() => moodToday?.[0]?.card?.card?.header?.title || '', [moodToday]);
  const info= React.useMemo(() => moodToday?.[0]?.card?.card?.gridElements?.infoWithStyle?.info || '', [moodToday]);
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(`Execution time: ${executionTime} milliseconds`);
  console.log(headerTitle)
  if(!info) {
    return null
  }
  console.log(info)


  return (
    <div>
      <h1>{headerTitle}</h1>
      <div>
        {
          info?.map((item)=>(
            <div>
          <img src={CDN_url+item?.imageId} alt="" />
          <p>{item?.action?.text}</p>
        </div>
          ))
        }
        
      </div>
    </div>
  );
}

export default MoodSection;
