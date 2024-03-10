import React from "react";
import styled from "styled-components";

const OfferCard = ({offerDetails}) => {
    const{header,
        couponCode,description
        }=offerDetails?.info || {};
        const handleCopy = () => {
          navigator.clipboard.writeText(couponCode);
          alert("Coupon code copied to clipboard!");
        };
  return (
    <Container>
      <OfferCon>
        <Offer>{header}</Offer>
      </OfferCon>
      <CouponCon>
        <CuoponDesCription>{couponCode} |</CuoponDesCription>
        <CuoponDesCription>{description} |</CuoponDesCription>
        <CuoponDesCription onClick={handleCopy}>Copy</CuoponDesCription>

      </CouponCon>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e9e9eb;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  /* padding: 8px; */
  /* height: 100%; */
  cursor: pointer;
  min-width: 200px;
  max-height: 60px;
  align-items: center;
`;
const OfferCon = styled.div``;
const Offer = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  white-space: nowrap;
  color: #686b78;
  font-family: ProximaNovaCondensedBold, arial, Helvetica Neue, sans-serif;
`;
const CouponCon = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const CuoponDesCription = styled.p`
  font-size: 0.56rem;
  font-weight: 700;
  white-space: nowrap;
  color: #686b78;
  font-family: ProximaNovaCondensedBold, arial, Helvetica Neue, sans-serif;
`;
export default OfferCard;
