import React from 'react'
import styled, { keyframes } from 'styled-components';
import LineBar from './LineBar';

const ShimmerEffectForResWithFoodDelivery = () => {
  return (
    <ShimmerContainer>
    <ShimmerTitle />
    <ShimmerSubContainer>
        <ShimmerCardContainer>
            {Array.from({ length: 12 }).map((_, index) => (
                <ShimmerRestaurantCard key={index} />
            ))}
        </ShimmerCardContainer>
    </ShimmerSubContainer>
    <LineBar />
</ShimmerContainer>
  )
}
const shimmer = keyframes`
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

// Styled components for shimmer skeleton
const ShimmerContainer = styled.div`
    margin-left: 10%;
    margin-top: 2%;
`;

const ShimmerTitle = styled.div`
    width: 300px;
    height: 28px;
    background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
    background-size: 800px 104px;
    animation: ${shimmer} 1.5s infinite linear;
`;

const ShimmerSubContainer = styled.div``;

const ShimmerCardContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
`;

const ShimmerRestaurantCard = styled.div`
    width: 250px;
    height: 320px;
    margin: 10px;
    background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
    background-size: 800px 104px;
    animation: ${shimmer} 1.5s infinite linear;
`;








export default ShimmerEffectForResWithFoodDelivery