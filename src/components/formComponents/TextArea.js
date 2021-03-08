import React from "react";

export default function TextArea(props) {
  const { item } = props;
  const { width } = props;

  let className = item.width !== "" ? "col-md-" + item.width : "col-md-12";

  if (width === "full") {
    className = "";
  }

  return (
    <div className={className} style={{ maxHeight: "125px" }}>
      <div className="form-group">
        <label>{item.label}</label>
        <textarea className="form-control" placeholder={item.placeholder} />
      </div>
    </div>
  );
}
