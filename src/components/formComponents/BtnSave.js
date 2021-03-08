import React from "react";

export default function BtnSave(props) {
  const { item } = props;

  const { width } = props;

  let className = item.width !== "" ? "col-md-" + item.width : "col-md-12";

  if (width === "full") {
    className = "";
  }

  return (
    <div className={className} style={{ maxHeight: "125px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="btn btn-danger">CANCEL</button>
        <button className="btn btn-primary">SAVE</button>
      </div>
    </div>
  );
}
