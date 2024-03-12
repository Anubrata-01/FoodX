import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Logo, cart, loginIcon } from "../../constant";
import { FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Utilities/Firebase";
import { useNavigate } from "react-router-dom";
import {
  removeUserDetails,
  setUserDetails,
  setisLogged,
} from "../../Redux Store/restaurantSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useToast } from "@chakra-ui/react";
const Navbar = () => {
  const [sign, setSign] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantity = useSelector((store) => store?.cart?.cartQuantity);
  const userDetail = useSelector((store) => store?.restaurant?.userDetails);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(
          setUserDetails({ email: email, uid: uid, displayName: displayName })
        );
        setSign(false);
      } else {
        dispatch(removeUserDetails());
        setSign(true);
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
  const toast = useToast();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setisLogged(false));
        navigate("/");
        toast({
          title: "Signout",
          description: "You are logged out from your account.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

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
              <StyledNavLink to={"/"}>Home</StyledNavLink>
            </NavLinks>
            <NavLinks>
              <BiSolidOffer />
              <StyledNavLink to={""}>Offers</StyledNavLink>
            </NavLinks>
            <NavLinks>
              <Cart>{cart}</Cart>

              <Span>{quantity && quantity}</Span>
              <StyledNavLink to={"/cart"}>Cart</StyledNavLink>
            </NavLinks>
            <NavLinks>
              {sign ? (
                <>
                  <FaSignInAlt />
                  <StyledNavLink to={"/signin"}>Sign In</StyledNavLink>
                </>
              ) : (
                <>
                  <>
                    {loginIcon}
                    <DisplayName>
                      <Name>
                        {userDetail.displayName && userDetail.displayName}
                      </Name>

                      <DIV className="box">
                        <Div>
                          <StyledNavLink className="text-sm">
                            Profile
                          </StyledNavLink>
                          <StyledNavLink
                            className="text-sm"
                            onClick={handleSignOut}
                          >
                            Sign out
                          </StyledNavLink>
                          <H3 />
                        </Div>
                      </DIV>
                    </DisplayName>
                  </>
                </>
              )}
            </NavLinks>
          </List>
        </Licon>
      </NavBar>
    </Container>
  );
};

// export default Navbar;

const Container = styled.div`
  margin-top: 0;
  width: 1200px;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: #fff;
  box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);
`;

const NavBar = styled.nav`
  width: 80%;
  margin-left: 7%;
  margin-top: 1%;
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
  text-align: center;
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
  position: relative;
  gap: 10px;
  color: #3d4152;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    color: #ffa700;
  }
  @media screen and (max-width: 640px) {
    gap: 1px;
  }
`;
const Cart = styled.span`
  /* background:green; */
`;
const Span = styled.span`
  position: absolute;
  top: 3px;
  left: 6px;
  color: white;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  align-items: center;
  line-height: 30px;
  /* margin-top:5px; */
  color: black;
`;
const DisplayName = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  position: relative;
  &:hover > .box {
    display: block;
  }
  /* &:hover > &{} */
  /* margin-top: 5px; */
  /* line-height: 5px; */
`;
const Name = styled.p``;
const DIV = styled.div`
  display: none;
`;
const Div = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  z-index: 1;
  top: 150%;
  border-radius: 2px;
  padding: 26px 30px;
  position: absolute;
  background-color: #fff;
  border-top: 2px solid #fc8019;
  box-shadow: 0 2px 20px 0 #93959f;
`;
const H3 = styled.h3`
  z-index: 2;
  content: "";
  position: relative;
  width: 11px;
  height: 11px;
  bottom: 81px;
  left: 48%;
  box-shadow: -3px -4px 9px -4px rgba(40, 44, 63, 0.5);
  background-color: #fff;
  border: 2px solid #fc8019;
  border-right: none;
  border-bottom: none;
  -ms-transform: translateX(-50%) rotate(45deg);
  transform: translateX(-50%) rotate(45deg);
`;
const TooltipText = styled.span`
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;

const TooltipTrigger = styled.span`
  position: relative;
  cursor: pointer;

  &:hover + ${TooltipText} {
    visibility: visible;
  }
`;

export default Navbar;
