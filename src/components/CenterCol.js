import React, { lazy, Suspense, useState } from "react";
import styled from "styled-components";
import SelectedItem from "./SelectedItem";
import DropHere from "./DropHere";

const StyledCenterCol = styled.div`
  border: 1px solid #ccc;
  background-color: #282c34;
  flex-grow: 8;
  overflow-y: scroll;
`;

const importComponent = (componentName) =>
  lazy(() =>
    import(`./formComponents/${componentName}`).catch(() =>
      import(`./formComponents/NullComponent`)
    )
  );

export default function CenterCol(props) {
  const { selectedItemsList, setSelectedItemsList } = props;
  const { draggedItem, setDraggedItem } = props;
  const { setSelectedItem } = props;
  const [componentList, setComponentList] = useState({});

  const FormItems = selectedItemsList.map((item, k) => {
    let Comp = <></>;
    if (!componentList[item.component]) {
      Comp = importComponent(item.component);
      setComponentList((c) => ({ ...c, [item.component]: Comp }));
    } else {
      Comp = componentList[item.component];
    }
    let className = item.width !== "" ? "col-md-" + item.width : "col-md-12";

    return (
      <Suspense fallback="Loading" key={k}>
        <div
          draggable={true}
          onDragStart={(e) => onDragStartHandler(e, item, k)}
          onDragEnd={(e) => onDragEndHandler(e)}
          onClick={(e) => onClickItemHandler(item, k)}
          className={className}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "5px 15px"
          }}
        >
          <Comp key={k} item={item} itemId={item.id} />

          <button
            style={{
              position: "absolute",
              background: "none",
              color: "#fff",
              border: "none",
              top: "0px",
              right: "0px"
            }}
            onClick={(e) => deleteButtonClickHandler(e, k)}
          >
            <i className="fa fa-times" />
          </button>
          <DropHere
            selectedItemsList={selectedItemsList}
            setSelectedItemsList={setSelectedItemsList}
            draggedItem={draggedItem}
            position={k + 1}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </Suspense>
    );
  });

  const deleteButtonClickHandler = (e, position) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedItemsList((old) => {
      const a = [...old];
      a.splice(position, 1);
      return a;
    });
  };

  const onDragStartHandler = (e, item, position) => {
    // setting move to true evalueted in dropHere Drop event method
    setDraggedItem({ ...item, move: true });
  };

  const onDragEndHandler = (e) => {
    setDraggedItem({});
  };

  const onClickItemHandler = (item, k) => {
    item.position = k;
    setSelectedItem(item);
  };

  return (
    <StyledCenterCol>
      {props.children}
      <div
        className="container"
        style={{
          height: "80%",
          overflowY: "scroll",
          backgroundColor: "#efefef",
          padding: "5px"
        }}
      >
        <div className="row no-gutters">{FormItems}</div>
      </div>
    </StyledCenterCol>
  );
}
