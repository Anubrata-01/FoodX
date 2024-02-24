import React from "react";
import styled, { keyframes } from "styled-components";

// Define shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

// Styled components
const ShimmerContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-left:9%;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ShimmerBlock = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
  background-size: 800px 104px;
  position: relative;
  animation: ${shimmer} 1.5s infinite linear;
`;

const ImgShimmer = styled(ShimmerBlock)`
  width: 245px;
  height: 180px;
  border-radius: 5px;
`;

const TextShimmer = styled(ShimmerBlock)`
  margin-left: 20px;
`;

const TitleShimmer = styled(ShimmerBlock)`
  width: 70%;
  height: 20px;
  margin-bottom: 10px;
`;

const RateTimeShimmer = styled(ShimmerBlock)`
  width: 50%;
  height: 15px;
  margin-bottom: 5px;
`;

const AddressFieldShimmer = styled(ShimmerBlock)`
  width: 80%;
  height: 15px;
`;

const ShimmerEffect = () => {
  let i=0;
  let len=20;
  return i<len ? (
    <ShimmerContainer className="shimmer-container">
      <CardContainer className="card-container">
        <ImgShimmer className="img" />
        <TextShimmer className="text-container">
          <TitleShimmer className="title" />
          <RateTimeShimmer className="rate-time" />
          <AddressFieldShimmer className="adress-feild">
            <ShimmerBlock as="h5" />
            <ShimmerBlock as="h5" className="area" />
          </AddressFieldShimmer>
        </TextShimmer>
      </CardContainer>
    </ShimmerContainer>
  ) : null;
};

export default ShimmerEffect;

