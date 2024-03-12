import React from "react";
import { CDN_url, icon} from "../../constant";
import styled from "styled-components";

const RestaurantCard = ({ item }) => {
  const { name, avgRating, areaName, cloudinaryImageId, cuisines } = item?.info || {};
  const { deliveryTime } = item?.info?.sla || {};
  const filterdCuisine =React.useMemo(()=>cuisines?.slice(0, 2) || [],[cuisines]) ;
  return (
    <Container>
      <ImgBox>
        <Img src={`${CDN_url}${cloudinaryImageId}`} alt="" />
      </ImgBox>

      <div>
        <Name>{name}</Name>
        <Delcon>
          <Rating>{icon}{avgRating} </Rating>
          {/* <p>"."</p> */}
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
export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <p>Promoted</p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
const Container = styled.div`
  margin: 0px;
  margin-top: 10px;
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
const ImgBox=styled.div`
  width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 15px;
    object-position: center;
    position: relative;
    overflow: hidden;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-style: none;
  border-radius: 15px;
`;
const Delcon = styled.div`
  margin-left: 5px;
  margin-top: 8px;
  width: 120px;
  display: flex;
  align-items: center;
  gap:10px
  /* justify-content: space-between; */
`;
const Rating=styled.p`
display: flex;
align-items: center;
gap:3px;
`
const Name = styled.div`
  margin-top: 8px;
  word-break:break-all;
  line-height: 18px;
  /* margin-bottom: 5px; */
  margin-left: 5px;
`;
const Cuisine = styled.div`
  display: flex;
  margin-top: 10px;

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
  margin-top: 5px;
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
