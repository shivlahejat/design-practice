import React, { useState } from "react";
import styled from "styled-components";

const bannerDesigns = [
  {
    name: "Ggwp",
    role: "CEO",
    bio: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely”",
    image: "/static/images/landingView/Person.png",
  },
  {
    name: "Edward Newgate",
    role: "Founder Circle",
    bio: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely”",
    image: "/static/images/landingView/Person.png",
  },
  {
    name: "Record3",
    role: "Founder ",
    bio: "“Anim et est cupidatat et. and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely”",
    image: "/static/images/landingView/Person.png",
  },
  {
    name: "Record4",
    role: "Founder ",
    bio: "“Duis commodo proident eiusmod excepteur.Laborum elit ex nostrud magna cillum sit exercitation nisi anim reprehenderit fugiat quis ad minim.”",
    image: "/static/images/landingView/Person.png",
  },
];

const BannerView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % bannerDesigns.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex =
      (currentIndex - 1 + bannerDesigns.length) % bannerDesigns.length;
    setCurrentIndex(prevIndex);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const currentDesign = bannerDesigns[currentIndex];
  return (
    <Wrapper>
      <Banner>
        <TopWrap>
          <Title>What our customers are saying</Title>
          <Border />
        </TopWrap>
        <BottomView>
          <NamingBio>
            <Image style={{ backgroundImage: `url(${currentDesign.image})` }} />
            <TextName>
              {currentDesign.name}
              <br />
              <span>{currentDesign.role}</span>
            </TextName>
          </NamingBio>
          <DescBio>{currentDesign.bio}</DescBio>
        </BottomView>
      </Banner>
      <TotalDots>
        {bannerDesigns.map((design, index) => (
          <Dot
            key={index}
            isActive={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </TotalDots>
      <BtnWrap>
        <Btn onClick={handlePrevClick}>↩</Btn>
        <Btn onClick={handleNextClick}>↪</Btn>
      </BtnWrap>
    </Wrapper>
  );
};

export default BannerView;

const TotalDots = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? "rgba(91, 155, 243, 1)" : "lightskyblue"};
  cursor: pointer;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Btn = styled.div`
  font-size: 33px;
  color: rgba(69, 143, 246, 1);
  cursor: pointer;
`;

const DescBio = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-family: "Mulish";
  font-size: 19px;
  max-width: 420px;
`;

const TextName = styled.div`
  color: #fff;
  font-family: "MulishBold";
  font-size: 22px;

  span {
    color: rgba(255, 255, 255, 0.85);
    font-family: "Mulish";
    font-size: 18px;
  }
`;

const Image = styled.div`
  height: 133px;
  width: 133px;
  border: 3px solid #fff;
  border-radius: 50%;
  background-image: url("/static/images/landingView/Person.png");
`;

const NamingBio = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const BottomView = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const Border = styled.div`
  width: 56px;
  height: 2px;
  border-radius: 6px;
  background: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  background: linear-gradient(223deg, #67c3f3 0%, #5a98f2 100%);
  width: 1120px;
  height: 425px;
`;
const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 64px 0;
`;

const Title = styled.div`
  color: #fff;
  font-family: "MulishBold";
  font-size: 36px;
`;
