import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export default function Switch(props) {
  const { item } = props;
  const { width } = props;

  let className = item.width !== "" ? "col-md-" + item.width : "col-md-12";

  if (width === "full") {
    className = "";
  }
  return (
    <div className={className} style={{ maxHeight: "125px" }}>
      {item.label}
      <div>
        <BootstrapSwitchButton
          checked={false}
          onlabel="On"
          onstyle="success"
          offlabel="Off"
          offstyle="secondary"
        />
      </div>
    </div>
  );
}
