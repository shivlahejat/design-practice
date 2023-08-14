import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <About>
        <Title>Trafalgar</Title>
        <OtherText>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
          <div>©Trafalgar PTY LTD 2020. All rights reserved</div>
        </OtherText>
      </About>

      {[...Array(3)].map((_, j) => {
        return (
          <Company key={j}>
            <Title>Company</Title>
            <OtherTextWrap>
              <OtherText>About</OtherText>
              <OtherText>About</OtherText>
              <OtherText>About</OtherText>
              <OtherText>About</OtherText>
            </OtherTextWrap>
          </Company>
        );
      })}
    </Wrapper>
  );
};

export default Footer;

const Company = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const OtherTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  color: #fff;
  font-family: "MulishBold";
  font-size: 24px;
`;

const OtherText = styled.div`
  color: #fff;
  font-family: "MulishLight";
  font-size: 18px;
  line-height: 28px;
  max-width: 391px;
  display: flex;
  flex-direction: column;
  gap: 31px;

  > div {
    color: #fff;
    font-family: "MulishLight";
    font-size: 18px;
    line-height: 28px;
    max-width: 391px;
    display: flex;
    flex-direction: column;
    gap: 31px;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 110px 0;
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(212deg, #67c3f3 0%, #5a98f2 100%);
`;
