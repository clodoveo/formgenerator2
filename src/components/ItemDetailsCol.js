import React from "react";
import DraggableCol from "./DraggableCol";
import ColHeader from "./ColHeader";

export default function ItemDetailsCol(props) {
  return (
    <DraggableCol handlerPosition="right" colWidth={props.colWidth}>
      <ColHeader title={props.title} />
      {props.children}
    </DraggableCol>
  );
}
