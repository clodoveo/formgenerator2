import React, { useState } from "react";
import { uniqueId } from "lodash";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { tableAtom, itemAtom } from "../atoms/optionsState";

const StyledFormElement = styled.li`
  background-color: #282c34;
  color: #abb2bf;
  display: flex;
  padding: 5px;
  margin: 2px;
  border-radius: 3px;
  border: 1px solid #abb2bf;
  width: 50px;
`;
const StyledIcon = styled.i`
  font-size: 30px;
  margin-right: 15px;
  margin-top: 5px;
`;

export default function FormElement(props) {
  const [itemOpacity, setItemOpacity] = useState(1);
  const { setDraggedItem } = props;
  const { item } = props;
  const { setSelectedItemsList } = props;
  const { setSelectedItem } = props;

  const SetAtomTable = useSetRecoilState(tableAtom(item.id));
  const SetAtomItem = useSetRecoilState(itemAtom(item.id));

  const onDragStartHandler = (e) => {
    setDraggedItem(item);
  };

  const onDragEndHandler = (e) => {
    setItemOpacity(1);
    setDraggedItem({});
  };

  const onClickHandler = (e, item) => {
    setSelectedItemsList((old) => {
      const newItem = { ...item, id: uniqueId() };
      const newList = [...old, newItem];
      return newList;
    });
    setSelectedItem(item);
    SetAtomItem(item);
    SetAtomTable(item.dataSourceTable);
  };

  return (
    <StyledFormElement
      id={item.id}
      draggable={true}
      style={{ opacity: itemOpacity }}
      onDragStart={onDragStartHandler}
      onDrag={() => setItemOpacity(0.8)}
      onDragEnd={(e) => onDragEndHandler(e)}
      onClick={(e) => onClickHandler(e, item)}
      title="start drag"
    >
      <StyledIcon className={item.icon} title={item.component} />
    </StyledFormElement>
  );
}
