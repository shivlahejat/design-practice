import React, { useState } from "react";
import styled from "styled-components";

const HomePage = () => {
  const initialContent =
    "What is a paragraph? Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.";
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
