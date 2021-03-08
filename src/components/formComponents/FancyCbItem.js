import React, { useState } from "react";
import uniqueId from "lodash";

export default function FancyCbItem(props) {
  const { checked, k, o, item } = props;
  const [isChecked, setIsChecked] = useState(false);

  const clickHandler = () => {
    setIsChecked(!isChecked);
  };

  const bg = isChecked ? "green" : "none";

  return (
    <div
      className="form-check form-check-inline"
      key={() => uniqueId()}
      style={{
        background: bg,
        border: "1px solid green",
        borderRadius: "10px",
        padding: "5px 10px",
        margin: "10px",
        color: isChecked ? "white" : "#666"
      }}
      onClick={clickHandler}
    >
      <input
        className="form-check-input"
        type="checkbox"
        id="inlineCheckbox1"
        value={o[item.dataSorceValue]}
        style={{ display: "none" }}
      />
      <label className="form-check-label" for="inlineCheckbox1">
        {o[item.dataSorceLabel]}
      </label>
    </div>
  );
}
