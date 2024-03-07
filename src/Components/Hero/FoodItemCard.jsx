import React, { useCallback, useState } from "react";
import styled from "styled-components";
import LineBar from "../../Utilities/LineBar";
import { CDN_url } from "../../constant";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { db } from "../../Utilities/Firebase";
import { collection,addDoc } from "firebase/firestore";
import { addUserId } from "../../Redux Store/restaurantSlice";
import { addItemToCart, updateQuantity } from "../../Redux Store/cartSlice";

const FoodItemCard = ({ info }) => {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const { userId } = useParams();

  const { id, name, imageId, price, description, defaultPrice } = info || {};
  const addtoCart = useCallback(() => {
    if (num >= 0) {
      setNum((prevNum) => prevNum + 1);
      dispatch(addItemToCart(info));
      const dataRef=addDoc(collection(db,"userId"),{
        id:userId
      })
      console.log(dataRef)
    } else {
      dispatch(addUserId(userId));
    }
  }, [num]);

  const handleMinus = useCallback(
    (itemId, quantity) => {
      if (num > 0) {
        setNum((prevNum) => prevNum - 1);
        dispatch(updateQuantity({ itemId, quantity }));
      }
    },
    [num]
  );

  const handlePlus = useCallback(
    (itemId, quantity) => {
      if (num >= 1) {
        setNum((prevNum) => prevNum + 1);
        dispatch(updateQuantity({ itemId, quantity }));
      }
    },
    [num]
  );
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

          <Button>
            {!num > 0 ? (
              <Add onClick={addtoCart}>Add</Add>
            ) : (
              <Con>
                <MinusSpan onClick={() => handleMinus(id, num - 1)}>
                  -
                </MinusSpan>
                <Quantity>{num}</Quantity>
                <PlusSpan onClick={() => handlePlus(id, num + 1)}>+</PlusSpan>
              </Con>
            )}
          </Button>
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
  font-weight: 600;
  color: #383a46;
  word-break: break-word;
`;
const Price = styled.h3`
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: -3px;
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
  animation: _1sXH- 0.2s ease;
  opacity: 1;
  transform: translateZ(0);
`;
const Add = styled.p`
  margin-top: 0;
`;
const Con = styled.div`
  margin-left: 13px;
  display: flex;
  gap: 22px;
`;
const PlusSpan = styled.span``;
const MinusSpan = styled.span`
  animation: _1vozQ 0.2s ease;
`;
const Quantity = styled.span``;

export default FoodItemCard;
