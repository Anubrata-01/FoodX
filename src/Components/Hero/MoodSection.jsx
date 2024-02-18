import React from 'react';
import useFetchApi from '../../CustomHooks/useFetchApi';
import {  Swigy_url, foodApi } from '../../constant';
import {  useSelector } from 'react-redux';
import styled from 'styled-components';
import LineBar from '../../Utilities/LineBar';


const MoodSection = () => {
  useFetchApi(foodApi);
  const Data = useSelector(store => store?.restaurant?.restaurantAPi);
  const filterData=Data?.data?.cards?.filter((item)=>item?.card?.card?.header?.title ==="What's on your mind?");
  const headerTitle = React.useMemo(() => filterData?.[0]?.card?.card?.header?.title || '', [filterData]);
  const info= React.useMemo(() => filterData?.[0]?.card?.card?.gridElements?.infoWithStyle?.info || '', [filterData]);
  console.log(headerTitle)
  if(!info) {
    return null
  }
  console.log(info)


  return (
    <Container>
      <Title>{headerTitle}</Title>
      <ItemCon>
        {
          info?.map((item,index)=>(
            <Item key={index}>
          <Img src={Swigy_url+item?.imageId} alt={item?.name} />
        </Item>
          ))
        }
        
      </ItemCon>
      <LineBar/>
    </Container>
  );
}
const Container=styled.div`
width: 80%;
margin-top:7%;
margin-left:10%;
box-sizing:border-box;
`
const  Title=styled.h1`
font-family:Basis_Grotesque_Pro;
font-size:22px;
font-weight:bold;
line-height: 28px;
color:rgba(2, 6, 12, 0.92);
`
const ItemCon=styled.div`
width:100%;
overflow-x:scroll;
scroll-behavior: smooth;
display: flex;
gap:18px;
&::-webkit-scrollbar {
    display: none;
  }

`

const Img=styled.img`
width:124px;
height: 160px;

`
const Item=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;

`


export default MoodSection;
