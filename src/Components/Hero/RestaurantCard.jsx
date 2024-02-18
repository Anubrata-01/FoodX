import React from "react";
import { CDN_url} from "../../constant";
import styled from "styled-components";

const RestaurantCard = ({ item }) => {
  const { name, avgRating, areaName, cloudinaryImageId, cuisines } = item?.info || {};
  const { deliveryTime } = item?.info?.sla || {};
  const filterdCuisine = cuisines?.slice(0, 2) || [];

  return (
    <Container>
      <div>
        <Img src={`${CDN_url}${cloudinaryImageId}`} alt="" />
      </div>

      <div>
        <Name>{name}</Name>
        <Delcon>
          <p>{avgRating} star</p>
          <p>{deliveryTime} mins</p>
        </Delcon>
        <Cuisine>
          {cuisines
            ? filterdCuisine.map((item,index) => (
                <CuisineItem key={index}>{item}</CuisineItem>
              ))
            : ""}
        </Cuisine>
        <Address>
          <AreaName>{areaName}</AreaName>
        </Address>
      </div>
    </Container>
  );
};
const Container = styled.div`
  margin: 0px;
  -webkit-font-smoothing: antialiased;
  font-family: Basis_Grotesque_Pro_Bold;
  font-weight: 700;
  font-size: 15px;
  line-height: 10px;
  letter-spacing: -0.3px;
  color: rgba(2, 6, 12, 0.75);
  width: 230px;
  height: auto;
  box-sizing: border-box;
  gap: 20px;
  &:hover {
    transform: scale(0.90); /* Adjust the scale factor as needed */
  }
  transition: all 0.05s ease 0s;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-style: none;
  border-radius: 15px;
`;
const Delcon = styled.div`
  margin-left: 5px;
  width: 120px;
  display: flex;
  justify-content: space-between;
`;
const Name = styled.div`
  margin-top: 8px;
  margin-left: 5px;
`;
const Cuisine = styled.div`
  display: flex;
`;
const CuisineItem = styled.p`
  margin-left: 5px;
  margin-top: -6px;
  font-family: Basis_Grotesque_Pro;
  font-weight: 200;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: rgba(2, 6, 12, 0.6);
`;

const Address = styled.div`
  margin-left: 5px;
`;
const AreaName = styled.p`
  margin-top: -5px;
  font-family: Basis_Grotesque_Pro;
  font-weight: 200;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: rgba(2, 6, 12, 0.6);
`;
export default React.memo(RestaurantCard);
