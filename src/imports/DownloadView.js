import ButtonWrap from "@/atoms/Button";
import React from "react";
import styled from "styled-components";

const DownloadView = () => {
  return (
    <Wrapper>
      <TextWrap>
        <Title>
          Download our <br /> mobile apps
        </Title>
        <Border />
        <SubTitle>
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </SubTitle>
        <ButtonWrap text="Download" />
      </TextWrap>
      <ImageWrap />
    </Wrapper>
  );
};

export default DownloadView;

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
  background-image: url("/static/images/landingView/Download.png");
  width: 665px;
  height: 434px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
