import React, { useState, useRef } from "react";
import styled from "styled-components";

const StyledLeftCol = styled.div`
  background-color: #282c34;
`;
const StyledLeftColResizerContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
`;
const StyledLeftColResizerContents = styled.div`
  flex: 1;
`;
const StyledLeftColResizerHandler = styled.div`
  width: 5px;
  background-color: #282c34;
  cursor: col-resize;
  color: #fff;
  align-items: center;
  display: flex;
  line-height: 5px;
`;

export default function DraggableCol(props) {
  const { handlerPosition } = props;

  let handlerPositionStyle = "row";
  switch (handlerPosition) {
    case "left":
      handlerPositionStyle = "row-inverse";
      break;
    default:
      handlerPositionStyle = "row";
      break;
  }
  const [colWidth, setColWidth] = useState(props.colWidth);
  const [colOpacity, setColOpacity] = useState(1);

  const onDragEndHandler = (e) => {
    setColOpacity(1);
    let pageWidth = window.innerWidth;
    let newWidth;
    let mousePosition = e.clientX;

    if (handlerPosition === "left") {
      newWidth = pageWidth - mousePosition;
    }
    if (handlerPosition === "right") {
      newWidth = mousePosition;
    }
    setColWidth(newWidth);
  };

  const columnRef = useRef();

  return (
    <StyledLeftCol
      ref={columnRef}
      style={{ width: colWidth, opacity: colOpacity }}
    >
      <StyledLeftColResizerContainer
        style={{ flexDirection: handlerPositionStyle }}
      >
        <StyledLeftColResizerContents>
          {props.children}
        </StyledLeftColResizerContents>
        <StyledLeftColResizerHandler
          draggable={true}
          onDrag={(e) => {
            setColOpacity(0.5);
          }}
          onDragEnd={(e) => {
            onDragEndHandler(e);
          }}
        >
          .<br />
          .<br />
          .<br />
        </StyledLeftColResizerHandler>
      </StyledLeftColResizerContainer>
    </StyledLeftCol>
  );
}
