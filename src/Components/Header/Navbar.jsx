import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "../../constant";
import { FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
  const[isShow,setIsShow]=useState({
    "display":false,
    "text":"Sign in"
  })
  const handleLoginBtn=()=>{
    setIsShow(prevState => ({
      ...prevState,
      "display": !prevState.display,
      "text":prevState?.display?"Sign in":"Sign out"
    }));
    console.log(isShow)

  }
  return (
    <Container>
      <NavBar>
        <LogoContainer>
          {Logo} <LogoName>FoodX</LogoName>
          </LogoContainer>
        <Licon>
          <List>
            <NavLinks>
              <FaHome />
              <p>Home</p>
              
            </NavLinks>
            <NavLinks>
              <BiSolidOffer />
              <p>Offers</p>
            </NavLinks>
            <NavLinks onClick={handleLoginBtn}>
              {
                !isShow?.display?(<FaSignInAlt />):(<FaSignOutAlt/>)
              }
              
              <p>{isShow?.text}</p>
            </NavLinks>
            <NavLinks>
              <FaCartPlus />
              <p>Cart</p>
              
            </NavLinks>
          </List>
        </Licon>
      </NavBar>
    </Container>
  );
};
const Container = styled.div`
  margin-top: -7px;
  width: 100%;
  position:fixed;
  top:0;
  background-color: aliceblue;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
`;
const NavBar = styled.nav`
  width: 80%;
  margin-left: 13%;
  border: "1px solid black";
  display: flex;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoName = styled.span`
  color: red;
`;
const Licon = styled.div`
  width: 50%;
  @media screen and (max-width: 640px) {
    width: auto;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    width: auto;
    background-color: cyan;
  }
`;
const NavLinks = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color:#3d4152;
  font-size: 16px;
  font-weight:500;
  cursor: pointer;
  :hover {
    color:#ffa700;
  }
  @media screen and (max-width: 640px) {
    gap: 1px;
  }
`;

export default Navbar;
