import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Logo } from "../../constant";
import { FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch,} from "react-redux";
import { auth } from "../../Utilities/Firebase";
import { useNavigate } from "react-router-dom";
import { removeUserDetails, setUserDetails, setisLogged } from "../../Redux Store/restaurantSlice";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = ({ isFixed }) => {
  const [sign, setSign] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(setUserDetails({ email: email, uid: uid, displayName: displayName }));
        setSign(false);
      } else {
        dispatch(removeUserDetails());
        setSign(true); 
      }
    });

    return () => unsubscribe(); 
  }, [dispatch]); 

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        dispatch(setisLogged(false));
        navigate("/");
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
              <FaCartPlus />
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
                  <FaSignOutAlt />
                  <DisplayName>
                    <StyledNavLink onClick={handleSignOut}>Sign out</StyledNavLink>
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
  margin-top: -7px;
  width: 1200px;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: #fff;
  box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);
`;

const NavBar = styled.nav`
  width: 80%;
  margin-left: 8%;
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
  /* margin-top: 5px; */
  /* line-height: 5px; */
`;
export default Navbar;
