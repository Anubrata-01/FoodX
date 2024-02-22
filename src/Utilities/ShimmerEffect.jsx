import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
`;

const ShimmerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ShimmerElement = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '20px'};
    background: linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%);
    background-size: 1000px 100%;
    position: relative;
    overflow: hidden;
    animation: ${shimmer} 1.5s infinite;
`;

const ShimmerEffect = () => {
    return (
        <ShimmerContainer>
            <ShimmerElement width="300px" height="30px" />
            <ShimmerElement width="80%" height="15px" />
            {[1, 2, 3].map((index) => (
                <ShimmerElement key={index} width="100%" height="150px" />
            ))}
        </ShimmerContainer>
    );
};

export default ShimmerEffect;
