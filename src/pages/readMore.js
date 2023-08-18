import React, { useState } from "react";
import styled from "styled-components";

const HomePage = () => {
  const initialContent =
    "Incididunt consectetur amet velit ea occaecat mollit tempor aliqua duis. Laborum aliqua deserunt exercitation laborum reprehenderit in velit reprehenderit aute. Dolor ea labore commodo esse.Ad occaecat anim adipisicing tempor tempor nostrud excepteur sit qui mollit dolore. Commodo eiusmod sunt do id. Dolore elit mollit ad tempor aliqua irure ipsum. Mollit laboris enim sint ex ut laborum exercitation labore ipsum amet ullamco irure pariatur Lorem. Aute ullamco pariatur laboris enim irure eiusmod enim aute exercitation. Esse officia sunt eu nisi velit fugiat. Sunt magna veniam qui pariatur cillum cillum enim consectetur deserunt.Ullamco fugiat magna laborum esse dolor nostrud. Incididunt est nisi irure sunt consectetur quis pariatur qui eiusmod id veniam. Ipsum quis tempor pariatur sint occaecat tempor labore eu ullamco excepteur et.";
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const displayedContent = isOpen
    ? initialContent
    : initialContent.slice(0, 200);

  return (
    <MainDiv>
      <Wrapper>
        <Content>{displayedContent}</Content>
        {isOpen && (
          <Container open={isOpen}>
            <Content>{initialContent.slice(200)}</Content>
          </Container>
        )}
        <ReadMoreButton onClick={toggleContent}>
          {isOpen ? "Read less" : "Read more"}
        </ReadMoreButton>
      </Wrapper>
    </MainDiv>
  );
};

export default HomePage;

const Wrapper = styled.div`
  max-width: 800px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

const Container = styled.div`
  max-height: ${(props) => (props.open ? "none" : "100px")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const ReadMoreButton = styled.button`
  background: transparent;
  border: none;
  color: blue;
  border-radius: 5px;
  cursor: pointer;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
