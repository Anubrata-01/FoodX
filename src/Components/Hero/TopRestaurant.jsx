import React, { useRef } from 'react';
import styled from 'styled-components';
import RestaurantCard from './RestaurantCard';
import { useSelector } from 'react-redux';
import { FcLeft,FcRight } from "react-icons/fc";
import LineBar from '../../Utilities/LineBar';

const TopRestaurant = () => {
  const TopRestaurant = useSelector(store => store?.restaurant?.restaurantAPi);
  const filterdTopResData = TopRestaurant?.data?.cards?.filter((item) => item?.card?.card?.header?.title === "Top restaurant chains in Kolkata");
  const headerTitle = React.useMemo(() => filterdTopResData?.[0]?.card?.card?.header?.title || '', [filterdTopResData]);
  const resCardInfo = React.useMemo(() => filterdTopResData?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || '', [filterdTopResData]);

  const resCardContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (resCardContainerRef.current) {
      resCardContainerRef.current.scrollLeft -= 360; 
      resCardContainerRef.current.scrollTo({
        behavior: 'smooth',
      })
    }
  };

  const handleScrollRight = () => {
    if (resCardContainerRef.current) {
      resCardContainerRef.current.scrollLeft += 360;
    }
  };

  if (!resCardInfo) {
    return null;
  }

  return (
    <Container>
      <Title>{headerTitle}</Title>
      <ScrollButtons>
        <ScrollButton onClick={handleScrollLeft}><FcLeft/></ScrollButton>
        <ScrollButton onClick={handleScrollRight}><FcRight/></ScrollButton>
      </ScrollButtons>
      <ResCardContainer ref={resCardContainerRef}>
        <ResCon>
          {resCardInfo?.map((card, index) => (
            <RestaurantCard key={index} item={card} index={index} />
          ))}
        </ResCon>
      </ResCardContainer>
      <LineBar />
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
  position: relative; 
`;

const Title = styled.h1`
  font-family: Basis_Grotesque_Pro;
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  color: rgba(2, 6, 12, 0.92);
`;

const ResCardContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  
`;

const ResCon = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
`;

const ScrollButtons = styled.div`
  position: absolute;
  top: 7%;
  left:87%;
  transform: translateY(-50%);
  display: flex;
`;

const ScrollButton = styled.button`
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin: 0 8px;
`;

export default TopRestaurant;
