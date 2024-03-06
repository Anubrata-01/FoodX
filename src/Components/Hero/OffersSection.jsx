import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import OfferCard from './OfferCard';
import LineBar from '../../Utilities/LineBar';

const OffersSection = ({cost,time}) => {
  const cardDetails = useSelector((store) => store?.restaurant?.resCardDetails);
  const Offers=React.useMemo(() =>
  cardDetails?.data?.cards?.find(
    (item) =>
      item?.card?.card?.["@type"] ===
       
"type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"

  ),
[cardDetails])
Offers && console.log(Offers)
  return (
    <Container>
        <div>
            <TimeCon>
            <Cost>{time?.slaString}</Cost>
                <Cost>{cost}</Cost>
                
            </TimeCon>
            <OfferCardContainer>{
                Offers && Offers.card?.card?.gridElements?.infoWithStyle?.offers?.map((item)=>(
                    <OfferCard offerDetails={item}/>
                ))

                
                }
                
            </OfferCardContainer>
        </div>
       
    </Container>
  )
}
const Container=styled.div`
    width:100%;
    margin-left: 0%;
    margin-top:1%;
   
`
const TimeCon=styled.div`
    margin-top:-8px;
    display: flex;
    gap:25px;
`
const Cost=styled.p`
    font-size: 13px;
    font-weight:900;

`
const OfferCardContainer=styled.div`
width: 100%;
margin-top: 1%;
overflow-x: scroll;
display: flex;
gap:5px;
&::-webkit-scrollbar{
    display: none;
}
`
export default OffersSection