import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Logo, cart, loginIcon } from "../../constant";
import { FaHome } from "react-icons/fa";
// import { BiSolidOffer } from "react-icons/bi";
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
  const [disply, setDisplay] = useState(false);

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
  const handleToggleDisplay = () => {
    setDisplay(!disply);
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
              {/* <BiSolidOffer /> */}
              <StyledNavLink to={""}>Offers</StyledNavLink>
            </NavLinks>
            <NavLinks>
              <Cart>{cart}</Cart>

              <Span>{quantity && quantity}</Span>
              <StyledNavLink to={"/cart"}>Cart</StyledNavLink>
            </NavLinks>
            <NavLinks className=" relative">
              {sign ? (
                <>
                  <FaSignInAlt />
                  <StyledNavLink to={"/signin"}>Sign In</StyledNavLink>
                </>
              ) : (
                <>
                  <DisplayName className=" ">
                    <Name onClick={handleToggleDisplay}>
                      {loginIcon}
                      {userDetail.displayName && userDetail.displayName}
                    </Name>
                    {disply ? (
                      <>
                        <DIV className="box absolute left-12">
                          <Div>
                            <StyledNavLink className="text-sm" to={"/my-account"}>
                              Profile
                            </StyledNavLink>

                            <StyledNavLink
                              className="text-sm text-cyan-700"
                              onClick={handleSignOut}
                            >
                              Sign out
                            </StyledNavLink>

                            <H3 />
                          </Div>
                        </DIV>
                      </>
                    ) : (
                      ""
                    )}
                  </DisplayName>
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
  /* @media (max-width:768px){
    width:900px;
    background-color:cyan;
  } */
`;

const NavBar = styled.nav`
  width: 80%;
  /* border: 1px solid red; */
  margin-left: 9%;
  margin-top: 1%;
  /* border: "1px solid black"; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* @media (min-width:640px) and (max-width:768px){
    width:75%;
    display: flex;
    gap:10px;
    position: relative;
   
  } */
`;

const LogoContainer = styled.div`
  width: 10%;
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  justify-content: space-between;
`;

const LogoName = styled.span`
  color: red;
  text-align: center;
`;

const Licon = styled.div`
  width: 50%;
  /* border: 1px solid black; */
  margin-left:5rem;
  /* @media (min-width:640px) and (max-width: 768px) {
    width: 70%;
  } */
  /* @media screen and (max-width: 640px) {
    width: 200px;
    position: absolute;
    top: 80%;
    left: 40%;
    background-color: #fff;
  box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);
  } */
`;

const List = styled.ul`
  /* margin-left:-5rem; */
  list-style: none;
  display: flex;
  /* justify-content: space-between; */
  gap: 30px;
  /* @media (min-width:640px) and (max-width: 768px) {
    gap:10px;
  }
  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap:4px;
    justify-content: center;
  } */
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

  /* &:hover > &{} */
  /* margin-top: 5px; */
  /* line-height: 5px; */
`;
const Name = styled.p`
  box-sizing: border-box;
  width: 170px;
  display: flex;
  gap: 8px;
  align-items: center;
  // justify-content: space-between;
  padding-left: -15px;
  @media screen and (max-width: 640px) {
   padding-left:0
  }
  // border:1px solid black;
`;

const DIV = styled.div`
  width: 130px;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 1;
  top: 180%;
  left: -33%;
  box-sizing: border-box;
  /* right:1%; */
  border-radius: 2px;
  padding: 10px 24px;
  position: absolute;
  background-color: #fff;
  border-top: 2px solid #fc8019;
  box-shadow: 0 2px 20px 0 #93959f;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  left: -20px;
  color: green;
  /* margin-right: -60px; */
  /* margin-left:-35px; */
`;
const H3 = styled.h3`
  z-index: 2;
  content: "";
  position: relative;
  width: 11px;
  height: 11px;
  bottom: 77px;
  left: 78%;
  box-shadow: -3px -4px 9px -4px rgba(40, 44, 63, 0.5);
  background-color: #fff;
  border: 2px solid #fc8019;
  border-right: none;
  border-bottom: none;
  -ms-transform: translateX(-50%) rotate(45deg);
  transform: translateX(-50%) rotate(45deg);
`;

export default Navbar;
