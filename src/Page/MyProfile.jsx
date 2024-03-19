import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ListItems } from "../constant";

const MyProfile = ({ Navbar, Address }) => {
  const navigate = useNavigate();
  const [displayComponent, setDisplayComponent] = useState(null);
  const location = useLocation();
  const userDetails = useSelector((store) => store?.restaurant?.userDetails);
  const { displayName, email } = userDetails || {};
  console.log(userDetails);
  useEffect(() => {
    if (location.pathname === "/my-account") {
      setDisplayComponent(null);
    }
  }, [location.pathname]);
  const handleLiClick = (itemName) => {
    navigate(itemName.path);
    setDisplayComponent(itemName.comp);
  };
  console.log(displayComponent);
  return (
    <div>
      <Navbar />
      <Wrapper>
        <DetailsContainer>
          <WrapDetails>
            <Name>{displayName && displayName}</Name>
            <ContactInformation>
              <Email>{email && email}</Email>
            </ContactInformation>
          </WrapDetails>
          <EditButton>Edit Profile</EditButton>
        </DetailsContainer>
        <SecondDiv>
          <Sidebar>
            <List>
              {ListItems.map((itemName, index) => (
                <Li key={index} onClick={() => handleLiClick(itemName)}>
                  {itemName?.name}
                </Li>
              ))}
            </List>
          </Sidebar>
          <Mainbar>{displayComponent || "Main"}</Mainbar>
        </SecondDiv>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  /* margin-top: 70px; */
  border: 1px solid black;
  background: #37718e;
  color: white;
`;
const DetailsContainer = styled.div`
  margin-left: 9%;
  margin-top: 10%;

  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  padding: 5px;
`;
const WrapDetails = styled.div`
  /* margin-top: 3%; */
`;
const Name = styled.p`
  font-size: 28px;
  font-weight: 600;
`;
const ContactInformation = styled.div`
  display: flex;
  gap: 15px;
`;

const Email = styled.p`
  font-size: 12px;
`;
const EditButton = styled.button`
  width: 100px;
  border: 0.7px solid white;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
`;
const SecondDiv = styled.div`
  width: 85%;
  /* border: 1px solid red; */
  margin-left: 6%;
  margin-top: 2%;
  padding-left: 3%;
  padding-top: 3%;
  height: 500px;
  display: flex;
  gap: 30px;
  background-color: white;
`;
const Sidebar = styled.div`
  width: 23%;
  height: 90%;
  background-color: #edf1f7;
  /* border: 1px solid gray; */
`;
const Mainbar = styled.div`
  width: 65%;
  height: 90%;
  background-color: white;
  /* border: 1px solid black; */
`;
const List = styled.ul`
  color: #282c3f;
  width: 90%;
  margin-left: 10%;
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;
const Li = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  /* border: 1px solid red; */
  width: 100%;
  padding: 10px;
  &:hover {
    color: #19191b;
    font-weight: 500;
  }
`;
export default MyProfile;
