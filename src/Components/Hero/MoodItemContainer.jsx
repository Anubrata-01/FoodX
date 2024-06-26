import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation, useParams } from "react-router-dom";
import useFetchMoodItemsDetails from "../../CustomHooks/useFetchMoodItemsDetails";
import { useDispatch, useSelector } from "react-redux";
import { crosIcon, filterObj } from "../../constant";
// import CloseIcon from '@mui/icons-material/Close';
import RestaurantCard from "./RestaurantCard";
import ShimmerEffectForResWithFoodDelivery from "../../Utilities/ShimmerEffectForResWithFoodDelivery";
import { setCurrentRoute } from "../../Redux Store/restaurantSlice";
const MoodItemContainer = ({ user }) => {
  const { userId } = useParams();
  const[filterData,setFilterData]=useState([]);
  const[sign,setSign]=useState(false)
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentRoute(location.pathname));
  }, [dispatch, location.pathname]);
  useFetchMoodItemsDetails(userId);
  const MoodItemContainerData = useSelector(
    (store) => store?.restaurant?.moodToday
  );

  const detailsArray =React.useMemo(()=>MoodItemContainerData?.cards?.slice(0, 3),[MoodItemContainerData]) ;
  const cards = React.useMemo(()=>MoodItemContainerData?.cards?.slice(3, -1),[MoodItemContainerData])
  useEffect(()=>{
    setFilterData(cards)
  },[cards])
  if (!cards) {
    return <ShimmerEffectForResWithFoodDelivery />;
  }
  const { title, description } = detailsArray?.[0]?.card?.card || {};
  console.log(cards);
  console.log(filterData)
  

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <FilterArea>
        {filterObj?.map((item, index) => (
          <ObjItem key={index} onClick={()=>item?.function(cards,setFilterData,setSign,sign)}>{item.name} <Span>{item?.icon}</Span></ObjItem>
        ))}
      </FilterArea>
      <Title1>Restaurants to explore</Title1>
      <CardContainer>
        {
          sign?(
            filterData?.map((item, index) => (
              <StyledNavLink
                key={index}
                to={"/restaurant/" + item?.card?.card?.info?.id}
              >
                <RestaurantCard item={item?.card?.card} />
              </StyledNavLink>
            ))

          ):(

            cards?.map((item, index) => (
              <StyledNavLink
                key={index}
                to={"/restaurant/" + item?.card?.card?.info?.id}
              >
                <RestaurantCard item={item?.card?.card} />
              </StyledNavLink>
            ))
          )
        }
        {/* {filterData?.map((item, index) => (
          <StyledNavLink
            key={index}
            to={"/restaurant/" + item?.card?.card?.info?.id}
          >
            <RestaurantCard item={item?.card?.card} />
          </StyledNavLink>
        ))} */}
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
  margin-top: 0px;
  font-size: 1.3rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1rem;
  opacity: 0.6;
  margin-top: 8px;
  max-width: 800px;
`;

const FilterArea = styled.div`
  margin-top: 7px;
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
  width: auto;
  padding: 6px 3px;
  /* padding-left: 6px;
  padding-top: 2px;
  padding-bottom: 3px;
  padding-right: 1px; */
  display: flex;
  /* gap:6px; */
  justify-content: space-between;
  align-items: center;

  /* grid-auto-flow: column; */
  box-shadow: rgba(2, 6, 12, 0.04) 0px 2px 12px;
  transition: all 100ms ease-in 0s;
  font-family: Basis_Grotesque_Pro;
  font-weight: 200;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.3px;
  color: rgba(2, 6, 12, 0.75);
`;
const Span=styled.span`
--fill-color: rgba(2, 6, 12, 0.75);
    --stroke-color: rgba(2, 6, 12, 0.92);
    line-height: 0;
    margin-left:3px;
    
    font-size:7px;
    
`
const CardContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: auto auto auto;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
export default React.memo(MoodItemContainer);
