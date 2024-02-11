import React from "react";
import styled from "styled-components";
import { Logo } from "../../constant";
import { FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { hover } from "@testing-library/user-event/dist/hover";
const Navbar = () => {
  return (
    <Container>
      <NavBar>
        <LogoContainer>
          {Logo} <LogoName>FoodX</LogoName>
        </LogoContainer>
        <Licon>
          <List>
            <Liitem>
              <FaHome />
              Home
            </Liitem>
            <Liitem>
              <BiSolidOffer />
              Offers
            </Liitem>
            <Liitem>
              <FaSignInAlt />
              Sign in
            </Liitem>
            <Liitem>
              <FaCartPlus />
              Cart
            </Liitem>
          </List>
        </Licon>
      </NavBar>
    </Container>
  );
};
const Container = styled.div`
  margin-top: -7px;
  width: 100%;
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

  @media screen and (max-width: 640px) {
    width: auto;
    background-color: cyan;
  }
`;
const Liitem = styled.li`
  display: flex;
  gap: 10px;
  padding-left: 2px;
  :hover {
    color: red;
  }
  @media screen and (max-width: 640px) {
    gap: 10px;
  }
`;

export default Navbar;
