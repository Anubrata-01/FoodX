import React from "react";
import styled from "styled-components";
import LineBar from "../../Utilities/LineBar";
import { CDN_url } from "../../constant";

const FoodItemCard = ({ info }) => {
  const {
    id,
    name,
    imageId,
    price,
    isVeg,
    ratings,
    description,
    defaultPrice,
  } = info && info;
  return (
    <div>
      <Container>
        <DetialsCon>
          <Name>{name}</Name>
          <Price>
            ₹{price ? Math.floor(price / 100) : Math.floor(defaultPrice / 100)}
          </Price>
          <div>
            <Description>{description ? description : ""}</Description>
          </div>
        </DetialsCon>
        <ImgCon>
          {imageId ? (
            <Img src={CDN_url + imageId} alt="" />
          ) : (
            <Img src="" alt="" />
          )}

          <Button>Add</Button>
        </ImgCon>
      </Container>
      <LineBar />
    </div>
  );
};
const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  margin-bottom: 2%;
`;
const DetialsCon = styled.div`
  width: 70%;
`;
const Name = styled.p`
  margin-right: 4px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #383a46;
  word-break: break-word;
`;
const Price = styled.h3`
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: -5px;
`;
const Description = styled.p`
  line-height: 1.3;
  color: rgba(40, 44, 63, 0.45);
  width: 70%;
  letter-spacing: -0.3px;
  font-size: 0.7rem;
`;
const ImgCon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 118px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 7rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 6px;
`;
const Button = styled.button`
  width: 6rem !important;
  height: 2.2rem;
  border-radius: 4px;
  box-shadow: 0 3px 8px #e9e9eb;
  border: 1px solid #d4d5d9;
  color: #60b246;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 30px;
  position: absolute;
  /* left: 8px; */
  top: 70%;
  text-align: center;
  background-color: #fff;
  margin-left: 8px;
  cursor: pointer;
`;

export default FoodItemCard;
