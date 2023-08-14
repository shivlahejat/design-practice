import React from "react";
import styled from "styled-components";

const HealthView = () => {
  return (
    <Wrapper>
      <ImageWrap />
      <TextWrap>
        <Title>
          Leading healthcare <br />
          providers
        </Title>
        <Border />
        <SubTitle>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </SubTitle>
        <Btn>Learn More</Btn>
      </TextWrap>
    </Wrapper>
  );
};

export default HealthView;

const Btn = styled.div`
  color: #458ff6;
  font-family: "MulishBold";
  text-align: center;
  font-size: 18px;
  padding: 15px;
  cursor: pointer;
  border-radius: 55px;
  border: 1.4px solid #458ff6;
  max-width: 200px;

  &:hover {
    background: #f3f3f3;
  }
`;

const SubTitle = styled.div`
  color: #7d7987;
  font-family: "MulishLight";
  font-size: 18px;
  max-width: 450px;
`;

const Border = styled.div`
  width: 56px;
  height: 2px;
  border-radius: 10px;
  background: #000;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-evenly;
`;

const Title = styled.div`
  color: #000;
  font-family: "MulishBold";
  font-size: 36px;
  font-weight: 700;
`;

const ImageWrap = styled.div`
  background-image: url("/static/images/landingView/Health.png");
  width: 650px;
  height: 477px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
