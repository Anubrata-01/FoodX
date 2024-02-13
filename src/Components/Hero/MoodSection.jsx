import React from 'react';
import useFetchApi from '../../CustomHooks/useFetchApi';
import {  Swigy_url, foodApi } from '../../constant';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MoodSection = () => {
  
  useFetchApi(foodApi);
  const moodToday = useSelector(store => store?.restaurant?.moodToday);
  const headerTitle = React.useMemo(() => moodToday?.[0]?.card?.card?.header?.title || '', [moodToday]);
  const info= React.useMemo(() => moodToday?.[0]?.card?.card?.gridElements?.infoWithStyle?.info || '', [moodToday]);
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
