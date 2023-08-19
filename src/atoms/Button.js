import React from "react";
import styled from "styled-components";

const ButtonWrap = ({ text }) => {
  return <Button>{text}</Button>;
};

const Button = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 55px;
  background: #458ff6;
  max-width: 200px;
  text-align: center;
  color: #fff;
  font-family: "MulishBold";
  cursor: pointer;

  &:hover {
    background: #457ff6;
  }
`;

export default ButtonWrap;
