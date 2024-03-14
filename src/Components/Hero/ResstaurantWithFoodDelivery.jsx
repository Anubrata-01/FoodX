import React from 'react';
import { useSelector } from 'react-redux';
import styled, {  } from 'styled-components';
import RestaurantCard from './RestaurantCard';
import LineBar from '../../Utilities/LineBar';
import ShimmerEffectForResWithFoodDelivery from '../../Utilities/ShimmerEffectForResWithFoodDelivery';
import { NavLink } from 'react-router-dom';

const ResstaurantWithFoodDelivery = () => {
    const ResFoodDelivery = useSelector(store => store?.restaurant?.restaurantAPi);
    
    if (!ResFoodDelivery || !ResFoodDelivery.data || !ResFoodDelivery.data.cards) {
        return <ShimmerEffectForResWithFoodDelivery/>
    }

    const deliveryTitle = "Restaurants with online food delivery in Kolkata";
    const restaurantId = "restaurant_grid_listing";

    const deliveryCard = ResFoodDelivery.data.cards.find(item => 
        item?.card?.card?.title === deliveryTitle
    );

    const restaurantCards = ResFoodDelivery.data.cards.filter(item => 
        item?.card?.card?.id === restaurantId && item?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants = restaurantCards.flatMap(item => 
        item.card.card.gridElements.infoWithStyle.restaurants
    );

    return (
        <Container>
            <Title>{deliveryCard?.card?.card?.title}</Title>
            <SubContainer>
                <CardContainer>
                    {restaurants.map((card, index) => (
                         <>
                         <StyledNavLink to={"/restaurant/" + card?.info?.id}>
                           <RestaurantCard key={index} item={card} index={index} />
                         </StyledNavLink>
                       </>
                    ))}
                </CardContainer>
            </SubContainer>
            <LineBar />
        </Container>
    );
};




const Container = styled.div`
    margin-left: 10%;
    margin-top: 2%;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
const Title = styled.p`
    font-family: Basis_Grotesque_Pro;
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
    color: rgba(2, 6, 12, 0.92);
`;

const SubContainer = styled.div``;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
`;

export default ResstaurantWithFoodDelivery;
