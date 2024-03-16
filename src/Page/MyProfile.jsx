import React from 'react'
import styled from 'styled-components'

const MyProfile = ({Navbar}) => {
  return (
    <div>
        <Navbar/>
        <Wrapper>
            <DetailsContainer>
                <WrapDetails>
                    <Name>Name</Name>
                    <ContactInformation>
                        <PhNo>Contact</PhNo>
                        <Email>Email</Email>
                    </ContactInformation>
                </WrapDetails>
                <EditButton>Edit Profile</EditButton>
            </DetailsContainer>
            <SecondDiv>

                <Sidebar></Sidebar>
                <Mainbar></Mainbar>
            </SecondDiv>
        </Wrapper>
    </div>
  )
}
const Wrapper=styled.div`
    /* margin-top: 70px; */
    border: 1px solid black;
    background:#37718e;
    color:white;
`
const DetailsContainer=styled.div`
    margin-left:9%;
    margin-top: 10%;

    width:80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    padding:5px;
`
const WrapDetails=styled.div`
    /* margin-top: 3%; */
`
const Name=styled.p`
    font-size:28px;
    font-weight:600;
`
const ContactInformation=styled.div`
    display: flex;
    gap:15px;
`
const PhNo=styled.p`
    
`
const Email=styled.p`
    
`
const EditButton=styled.button`
    width: 100px;
    border: 0.7px solid white;
    height: 30px;
    font-size:12px;
    font-weight:600;
    text-transform:capitalize;
`
const SecondDiv=styled.div`
    width: 85%;
    border: 1px solid red;
    margin-left:6%;
    margin-top: 2%;
    padding-left:3%;
    padding-top:3%;
    height: 500px;
    display: flex;
    gap: 30px;
    background-color: white;
`
const Sidebar=styled.div`
    width:23%;
    height: 90%;
    background-color: #edf1f7;;
    border: 1px solid gray;
`
const Mainbar=styled.div`
    width:65%;
    height: 90%;
    background-color: white;
    border: 1px solid black;

`
export default MyProfile