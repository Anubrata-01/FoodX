import React, { useRef } from "react";
import styled from "styled-components";
import RestaurantCard from "./RestaurantCard";
import { useSelector } from "react-redux";
import { FcLeft, FcRight } from "react-icons/fc";
import LineBar from "../../Utilities/LineBar";
import ShimmerEffect from "../../Utilities/ShimmerEffect";
import { withPromoted } from "./RestaurantCard";
import { NavLink } from "react-router-dom";
const EnhancedRestaurantCard = withPromoted(RestaurantCard);
const TopRestaurant = () => {
  const TopRestaurant = useSelector(
    (store) => store?.restaurant?.restaurantAPi
  );
  const filterdTopResData = TopRestaurant?.data?.cards?.filter(
    (item) =>
      item?.card?.card?.header?.title === "Top restaurant chains in Kolkata"
  );
  const headerTitle = React.useMemo(
    () => filterdTopResData?.[0]?.card?.card?.header?.title || "",
    [filterdTopResData]
  );
  const resCardInfo = React.useMemo(
    () =>
      filterdTopResData?.[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || "",
    [filterdTopResData]
  );

  const resCardContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (resCardContainerRef.current) {
      resCardContainerRef.current.scrollLeft -= 360;
     
    }
  };

  const handleScrollRight = () => {
    if (resCardContainerRef.current) {
      resCardContainerRef.current.scrollLeft += 360 ;
    }
  };

  if (!resCardInfo) {
    return <ShimmerEffect />;
  }

  return (
    <Container>
      <Title>{headerTitle}</Title>
      <ScrollButtons>
        <ScrollButton onClick={handleScrollLeft}>
          <FcLeft/>
        </ScrollButton>
        <ScrollButton onClick={handleScrollRight}>
          <FcRight/>
        </ScrollButton>
      </ScrollButtons>
      <ResCardContainer ref={resCardContainerRef}>
        <ResCon>
          {resCardInfo?.map((card, index) => (
            <>
              <StyledNavLink to={"/restaurant/" + card?.info?.id}>
                <RestaurantCard key={index} item={card} index={index} />
              </StyledNavLink>
            </>
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
  /* z-index: -1; */
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
  scroll-behavior: smooth;
    scroll-snap-type: mandatory;
`;

const ResCon = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  transition: transform .3s ease-in-out;
  scroll-behavior: smooth;
    scroll-snap-type: mandatory;
`;

const ScrollButtons = styled.div`
  position: absolute;
  top: 7%;
  left: 87%;
  transform: translateY(-50%);
  display: flex;
`;

const ScrollButton = styled.button`
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin: 0 8px;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
export default TopRestaurant;
