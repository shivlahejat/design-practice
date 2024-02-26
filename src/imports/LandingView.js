import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import ButtonWrap from "@/atoms/Button";

const LandingView = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <TextWrap>
          <MainTitle>
            Virtual healthcare <br />
            for you
          </MainTitle>
          <SubTitle>
            Trafalgar provides progressive, and affordable <br /> healthcare,
            accessible on mobile and online
            <br /> for everyone
          </SubTitle>
          <ButtonWrap text="Consult Today" />
        </TextWrap>
        <ImageWrap />
      </Wrapper>
    </>
  );
};

export default LandingView;



const SubTitle = styled.div`
  color: #7d7987;
  font-family: "MulishLight";
  font-size: 21px;
  line-height: 32px;
`;

const MainTitle = styled.div`
  color: #000;
  font-family: "MulishBold";
  font-size: 48px;
  line-height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  gap: 50px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-evenly;
`;
const ImageWrap = styled.div`
  background-image: url("/static/images/landingView/LandingImage.png");
  width: 693px;
  height: 598px;
`;
