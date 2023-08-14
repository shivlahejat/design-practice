import Head from "next/head";
import React from "react";
import styled, { css } from "styled-components";

const testingDesign = () => {
  return (
    <>
      <Head>
        <title>Testing</title>
      </Head>
      <Container>
        <Wrapper>
          <LeftWrap>
            <Logo />
            <TextWrap>
              Say hello to global food and beverage producers and suppliers, all
              in one place
            </TextWrap>
          </LeftWrap>
          <RightWrap>
            <FormTitle>
              Let’s get started <br />
              with a few simple steps
            </FormTitle>
            <FormDatas>
              <InputDiv>
                <InputWrap>
                  <Label>
                    Email <span>*</span>
                  </Label>
                  <Input />
                </InputWrap>
                <InputWrap>
                  <Label>
                    Full name <span>*</span>
                  </Label>
                  <Input />
                </InputWrap>{" "}
                <InputWrap>
                  <Label>
                    Password <span>*</span>
                  </Label>
                  <Input />
                </InputWrap>
              </InputDiv>
              <ButtonWrap>
                <BtnText>Sign up</BtnText>
              </ButtonWrap>
            </FormDatas>
            <LinkWrap>
              <Text>
                By signing up, you agree to our <span>Terms of Service</span>.
              </Text>
              <Text>
                Already have an account? <spand>Log in</spand>
              </Text>
            </LinkWrap>
          </RightWrap>
        </Wrapper>
      </Container>
    </>
  );
};

export default testingDesign;

const Text = styled.div`
  color: #bdbdbd;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.5px;

  span {
    color: #bdbdbd;
    text-decoration-line: underline;
    cursor: pointer;
  }

  spand {
    color: #19b07e;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

const LinkWrap = styled.div`
  margin-top: 57px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BtnText = styled.div`
  color: #fff;
  text-align: center;
  font-family: "GilroyBold";
  font-size: 20px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  letter-spacing: -0.562px;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 450px;
  height: 76px;
  padding: 24px 43px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #00c38b;
  cursor: pointer;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
`;

const Label = styled.div`
  color: #343434;
  font-family: "GilroySemiBold";
  font-size: 16px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  letter-spacing: 0.207px;

  span {
    color: #f00;
  }
`;

const Input = styled.input`
  line-height: 24px;
  border: none;
  border-bottom: 1px solid !important;

  &:focus {
    outline: none;
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormDatas = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 50px;
`;

const FormTitle = styled.div`
  color: #232323;
  font-size: 34px;
  font-family: "GilroySemiBold";
  font-style: normal;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: -0.5px;
  max-width: 421px;
`;

const RightWrap = styled.div`
  border-radius: 50px;
  background: #fff;
  padding: 55px 52px;
  display: flex;
  flex-direction: column;
  gap: 77px;
`;

const TextWrap = styled.div`
  color: #f9e2ba;
  font-size: 39px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
  max-width: 350px;
  font-family: "GilroySemiBold";
`;

const LeftWrap = styled.div`
  display: flex;
  padding: 33px 51px;
  border-radius: 50px 0px 0px 50px;
  background: #084b3e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.div`
  background-image: url("/static/images/landingView/logo.png");
  width: 171.48px;
  height: 94.462px;
  flex-shrink: 0;
`;

const Container = styled.div`
  display: flex;
  background-image: url("/static/images/landingView/Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1160px;
  height: 792px;
  border-radius: 50px;
  background: #fff;
  display: flex;
`;
