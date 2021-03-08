import React, { useState } from "react";
import "./styles.css";
//import { ReactFormBuilder } from "react-form-builder2";
import "react-form-builder2/dist/app.css";

export default function App() {
  const allowDrop = (ev) => {
    ev.preventDefault();
    console.log("1");
  };

  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("2");
  };

  const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log("3");
  };

  return (
    <div className="App">
      <div draggable="true" onDragStart={drag}>
        puoi draggarmi
      </div>
      <div
        droppable="true"
        style={{ border: "1px solid #ccc", height: "500px" }}
        onDrop={drop}
        onDragOver={allowDrop}
      >
        droppami
      </div>
      {
        // <ReactFormBuilder />
      }
    </div>
  );
}
