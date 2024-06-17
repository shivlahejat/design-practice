import React, { useState } from "react";
import styled from "styled-components";

const accordionData = [
  {
    title: "Section 1",
    content: "Content for section 1...",
  },
  {
    title: "Section 2",
    content: "Content for section 2...",
  },
];

const AccordionPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      {accordionData.map((item, index) => (
        <AccordionContainer key={index}>
          <AccordionHeader onClick={() => toggleAccordion(index)}>
            {item.title}
            <AccordionIcon
              isOpen={activeIndex === index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z" />
            </AccordionIcon>
          </AccordionHeader>
          <AccordionContent isOpen={activeIndex === index}>
            {item.content}
          </AccordionContent>
        </AccordionContainer>
      ))}
    </>
  );
};

export default AccordionPage;

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
`;

const AccordionHeader = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionIcon = styled.svg`
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const AccordionContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 10px;
`;
