import React, { useState } from "react";
import FoodItemCard from "./FoodItemCard";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const FoodAccordian = ({ foodItems, title }) => {
  let length = foodItems && foodItems.length;
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Container>
      <div>
        <Title onClick={handleClick}>
          {title} ({length})
          <Span>{!show ? <FaAngleUp /> : <FaAngleDown />}</Span>
        </Title>
      </div>
      {!show
        ? foodItems &&
          foodItems.map((item, index) => (
            <div key={index}>
              <FoodItemCard info={item?.card?.info} />
            </div>
          ))
        : ""}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background-color: gray;
  background-color: rgb(249 250 251);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  padding: 6px;
  margin-top: 12px;
  /* cursor: pointer; */
`;
const Title = styled.p`
  font-weight: 900;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;
const Span = styled.span`
  margin-right: 4%;
`;
export default FoodAccordian;
