import React, { } from 'react';
import styled, { } from 'styled-components';
import { useParams } from 'react-router-dom';
import useFetchMoodItemsDetails from '../../CustomHooks/useFetchMoodItemsDetails';
import { useSelector } from 'react-redux';
import { filterObj } from '../../constant';
import RestaurantCard from './RestaurantCard';
import ShimmerEffectForResWithFoodDelivery from '../../Utilities/ShimmerEffectForResWithFoodDelivery';
import ShimmerEffect from '../../Utilities/ShimmerEffect';
const MoodItemContainer = () => {
  const { userId } = useParams();
  const Mood_Item_Url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4714457&lng=88.3844319&collection=${userId}&tags=layout_CCS_Dosa&type=rcv2`;
  useFetchMoodItemsDetails(Mood_Item_Url)
  const MoodItemContainerData = useSelector(
    (store) => store?.restaurant?.moodToday
  );
    console.log("mooditemcontainer")
  // Mimic loading state
  if (!MoodItemContainerData) {
    return <ShimmerEffect/>
  }

  const detailsArray = MoodItemContainerData?.cards?.slice(0, 3);
  const cards = MoodItemContainerData?.cards?.slice(3, -1);
  if(!cards){
    return <ShimmerEffectForResWithFoodDelivery/>
  }
  const { title, description } = detailsArray?.[0]?.card?.card || {};

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <FilterArea>
        {filterObj?.map((item) => (
          <ObjItem key={item.id}>{item.name}</ObjItem>
        ))}
      </FilterArea>
      <Title1>Restaurants to explore</Title1>
      <CardContainer>
        {
          cards?.map((item, index) => (
            <RestaurantCard key={index} item={item?.card?.card} />
          ))}
      </CardContainer>
    </Container>
  );
};

// Styled components for your UI
const Container = styled.div`
  margin-top: 6rem;
  margin-left: 6rem;
`;

const Title = styled.p`
  font-size: 2.3rem;
  font-weight: 600;
`;
const Title1 = styled.p`
margin-top:-10px;
  font-size: 1.3rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1rem;
  opacity: 0.6;
  margin-top: -28px;
  max-width: 800px;
`;

const FilterArea = styled.div`
  margin-top: -7px;
  width: 45%;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  display: flex;
  gap: 15px;
`;

const ObjItem = styled.p`
  border-radius: 18px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(226, 226, 231);
  padding: 9px 9px;
  display: inline-grid;
  width: max-content;
  grid-auto-flow: column;
  box-shadow: rgba(2, 6, 12, 0.04) 0px 2px 12px;
  transition: all 100ms ease-in 0s;
  font-family: Basis_Grotesque_Pro;
  font-weight: 200;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.3px;
  color: rgba(2, 6, 12, 0.75);
`;

const CardContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: auto auto auto;
`;

export default React.memo(MoodItemContainer);
