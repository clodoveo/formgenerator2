import React, { useState } from "react";
import styled from "styled-components";

const StyledMainWrapper = styled.div`
  border: 1px solid #ccc;
  height: 60vh;
  background-color: #eee;
  display: flexbox;
`;

export default function MainWrapper(props) {
  return <StyledMainWrapper>{props.children}</StyledMainWrapper>;
}
