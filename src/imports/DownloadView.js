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
        <Btn>
          Download
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
          >
            <path
              d="M4.81951 1.05554L4.81951 12.6308L2.27646 10.0877C1.92569 9.73698 1.39954 9.73698 1.04878 10.0877C0.698014 10.4385 0.698014 10.9647 1.04878 11.3154L5.08258 15.3492C5.43335 15.7 5.95949 15.7 6.31026 15.3492L10.3441 11.3154C10.6948 10.9647 10.6948 10.4385 10.3441 10.0877C9.9933 9.73698 9.46715 9.73698 9.11638 10.0877L6.57333 12.6308L6.57333 1.05554C6.57333 0.617083 6.22257 0.178627 5.69642 0.178627C5.17027 0.178627 4.81951 0.617083 4.81951 1.05554Z"
              fill="#458FF6"
            />
          </svg>
        </Btn>
      </TextWrap>
      <ImageWrap />
    </Wrapper>
  );
};

export default DownloadView;

const Btn = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
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
