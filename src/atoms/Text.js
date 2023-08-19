import React from "react";
import styled from "styled-components";

const LabelText = ({ text }) => {
  return <Label>{text}</Label>;
};

export default LabelText;

const Label = styled.div`
  color: #343434;
  font-family: "GilroySemiBold";
  font-size: 16px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  letter-spacing: 0.207px;
`;
