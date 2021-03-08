import React from "react";

export default function H2(props) {
  const { item } = props;
  const { width } = props;

  let className = item.width !== "" ? "col-md-" + item.width : "col-md-12";

  if (width === "full") {
    className = "";
  }

  return (
    <div className={className} style={{ maxHeight: "125px" }}>
      <h2>{item.label}</h2>
    </div>
  );
}
