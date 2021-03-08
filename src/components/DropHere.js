import React, { useState } from "react";
import styled from "styled-components";

const StyledDropHere = styled.div`
  height: 5px;
  border-bottom: 2px dashed #ccc;
  margin-bottom: 10px;
`;

export default function DropHere(props) {
  const [overState, setOverState] = useState(false);
  const { setSelectedItemsList } = props;
  const { draggedItem } = props;
  const { setSelectedItem } = props;
  const onDragOverHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const onDragEnterHandler = (e) => {
    setOverState((old) => true);
  };

  const onDragLeaveHandler = (e) => {
    setOverState((old) => false);
  };

  const onDropHandler = (e, position) => {
    setOverState((old) => false);

    if (draggedItem.move) {
      setSelectedItemsList((old) => {
        const newArr = array_move(old, draggedItem.position, position);
        const sortedNewArr = newArr.map((item, k) => {
          return { ...item, position: k };
        });
        return sortedNewArr;
      });
    } else {
      setSelectedItemsList((old) => {
        draggedItem.position = position;
        old.splice(position, 0, draggedItem);
        return old;
      });
    }
    setSelectedItem(draggedItem);
  };

  function array_move(arr, old_index, new_index) {
    if (old_index === new_index) {
      return arr;
    }
    if (new_index > old_index) {
      new_index = new_index - 1;
    }

    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }

    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  }

  const overStyle = overState
    ? { borderColor: "#666", height: "35px" }
    : { borderColor: "#ccc" };

  return (
    <StyledDropHere
      style={overStyle}
      onDrop={(e) => onDropHandler(e, props.position)}
      onDragOver={(e) => onDragOverHandler(e)}
      onDragEnter={(e) => onDragEnterHandler(e)}
      onDragLeave={(e) => onDragLeaveHandler(e)}
      className={props.className}
    >
      {/*props.position // for debugging */}
      {props.children}
    </StyledDropHere>
  );
}
