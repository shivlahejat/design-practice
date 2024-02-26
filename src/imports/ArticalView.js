import ButtonWrap from "@/atoms/Button";
import React from "react";
import styled from "styled-components";

const ArticalView = () => {
  return (
    <Wrapper>
      <Artical>
        {[...Array(3)].map((_, j) => {
          return (
            <Card key={j}>
              <Image />
              <TextBlock>
                <MainTitle>
                  Disease detection, check up in the laboratory
                </MainTitle>
                <SubTitle>
                  In this case, the role of the health laboratory is very
                  important to do a disease detection...
                </SubTitle>
                <Read>Read more ↪</Read>
              </TextBlock>
            </Card>
          );
        })}
      </Artical>
      <ButtonWrap text="View More" />
    </Wrapper>
  );
};

export default ArticalView;

const Read = styled.div`
  margin-top: 13px;
  color: #4089ed;
  font-family: "MulishSemiBold";
  font-size: 17px;
`;

const SubTitle = styled.div`
  color: #7d7987;
  font-family: "MulishLight";
  font-size: 16px;
  max-width: 90%;
`;
const MainTitle = styled.div`
  color: #000;
  font-family: "MulishBold";
  font-size: 21px;
`;

const TextBlock = styled.div`
  padding: 21px 33px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 70px;
`;
const Artical = styled.div`
  display: flex;
  gap: 30px;
`;

const Image = styled.div`
  background-image: url("/static/images/landingView/Artical.png");
  width: 100%;
  height: 240px;
`;

const Card = styled.div`
  width: 350px;
  height: 512px;
  border-radius: 20px;
  background: #fff;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
