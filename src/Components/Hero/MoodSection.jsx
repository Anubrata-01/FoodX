import React, {} from 'react';
import useFetchApi from '../../CustomHooks/useFetchApi';
import { Swigy_url, foodApi } from '../../constant';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import LineBar from '../../Utilities/LineBar';
import { NavLink } from 'react-router-dom';
import ShimmerEffect from '../../Utilities/ShimmerEffect';

const shimmerAnimation = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const Placeholder = styled.div`
  background: linear-gradient(to right, #f6f7f8 4%, #edeef1 25%, #f6f7f8 36%);
  background-size: 1000px 100%;
  animation: ${shimmerAnimation} 1s infinite;
  border-radius: 8px;
`;

const MoodSection = () => {
  useFetchApi(foodApi);
  const Data = useSelector(store => store?.restaurant?.restaurantAPi);
  const filterData =React.useMemo(()=> Data?.data?.cards?.filter((item) => item?.card?.card?.header?.title === "What's on your mind?"),[Data]);
  const headerTitle = React.useMemo(() => filterData?.[0]?.card?.card?.header?.title || '', [filterData]);
  const info = React.useMemo(() => filterData?.[0]?.card?.card?.gridElements?.infoWithStyle?.info || '', [filterData]);


  

  return info? (
    <Container>
      <Title>{headerTitle}</Title>
      <ItemCon>
        {info?.map((item, index) => {
          let entityId = item.entityId;
          if (typeof entityId === 'string' && entityId.startsWith('swiggy://collectionV2')) {
            const collectionId = entityId.match(/collection_id=(\d+)/);
            entityId = collectionId ? collectionId[1] : entityId;
          }
          return (
            <NavLink to={"/" + entityId} key={index}>
              <Item>
                <Img src={Swigy_url + item?.imageId} alt={item?.name} />
              </Item>
            </NavLink>
          );
        })}
      </ItemCon>
      <LineBar />
    </Container>
  ):(<h1>Data not found</h1>)
}

const Container = styled.div`
  width: 80%;
  margin-top: 7%;
  margin-left: 10%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: Basis_Grotesque_Pro;
  font-size: 22px;
  font-weight: bold;
  line-height: 28px;
  color: rgba(2, 6, 12, 0.92);
`;

const ItemCon = styled.div`
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  display: flex;
  /* justify-content: space-between; */
  /* gap: -8px; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Img = styled.img`
  width: 164px;
  height: 160px;
`;

const Item = styled.div`
width: 120px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MoodSectionComponent = React.memo(MoodSection);
