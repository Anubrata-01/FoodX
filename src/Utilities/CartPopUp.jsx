// import { ContrastOutlined } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CartPopUp = () => {
  const navigate=useNavigate()
  const quantity=useSelector((store)=>store?.cart?.cartStore)
  let length=quantity.length
  return (
    <Container>
        
        <Box>
            <ItemText>  {length} item added to cart</ItemText>
            <ViewCart onClick={()=>navigate("/cart")}> view cart</ViewCart>
        </Box>


    </Container>
  )
}
const Container=styled.div`
width:100%;
box-sizing: border-box;
border-radius: 3px;
padding: 8px 8px;
background: #60b246;
color: #fff;
`
const Box=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const ItemText=styled.p`
  text-align: center;
`
const ViewCart=styled.p`
text-align: center;
cursor: pointer;
`
export default CartPopUp