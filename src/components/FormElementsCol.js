import React from "react";
import DraggableCol from "./DraggableCol";
import ColHeader from "./ColHeader";

export default function FormElementsCol(props) {
  const { setSelectedItemList } = props;
  return (
    <DraggableCol colWidth={props.colWidth} handlerPosition="left">
      <div
        style={{
          overflowY: "scroll",
          height: "100%"
        }}
      >
        <ColHeader title={props.title} />
        {props.children}
      </div>
    </DraggableCol>
  );
}
