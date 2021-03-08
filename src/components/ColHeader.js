import React from "react";
import styled from "styled-components";

const StyledColHeade = styled.div`
  background-color: #282c34;
  color: #abb2bf;
  text-align: center;
  font-size: 0.9em;
  padding: 5px;
`;

export default function ColHeader(props) {
  return <StyledColHeade>{props.title}</StyledColHeade>;
}
