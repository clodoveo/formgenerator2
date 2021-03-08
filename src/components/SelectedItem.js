import React from "react";
import styled from "styled-components";

const StyledSelectedItem = styled.div`
  background-color: #000;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  margin: 5px;
`;

export default function SelectedItem(props) {
  return (
    <StyledSelectedItem draggable={true}>{props.children}</StyledSelectedItem>
  );
}
