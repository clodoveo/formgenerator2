import React from "react";

export default function H1(props) {
  const { item } = props;
  const { width } = props;

  let className = item.width !== "" ? "col-md-" + item.width : "col-md-12";

  if (width === "full") {
    className = "";
  }
  return (
    <div className={className} style={{ maxHeight: "125px" }}>
      <h1>{item.label}</h1>
    </div>
  );
}
