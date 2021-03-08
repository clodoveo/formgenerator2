import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Highlight from "react-highlight";
import FormPreview from "./FormPreview";
import JsonPaste from "./JsonPaste";

import "highlight.js/styles/atom-one-dark.css";
const StyledFooter = styled.div`
  overflow-y: scroll;
  height: 40vh;
  background-color: #282c34;
`;

export default function Footer(props) {
  const formRef = useRef();
  const textareaRef = useRef();
  const [htmlResults, setHtmlResults] = useState();

  useEffect(() => setHtmlResults(() => formRef.current.outerHTML), [
    props.selectedItemsList
  ]);

  const onClickHandler = (e) => {
    //console.log(formRef.current.outerHTML);
    textareaRef.current.select();
    document.execCommand("copy");
    alert("HTML COPIED!");
  };

  return (
    <StyledFooter>
      <div className="row">
        <div
          className="col-md-3"
          style={{ overflowY: "scroll", height: "38vh" }}
        >
          <Highlight language="auto">
            {JSON.stringify(props.selectedItemsList, null, 2)}
          </Highlight>
        </div>
        <div className="col-md-5">
          <FormPreview
            formRef={formRef}
            selectedItemsList={props.selectedItemsList}
          />
        </div>
        <div className="col-md-4">
          <JsonPaste setSelectedItemsList={props.setSelectedItemsList} />
          <div style={{ position: "relative" }}>
            <label style={{ color: "#ccc" }}>HTML results:</label>
            <button
              className="btn btn-secondary"
              title="copy HTML to clipboard"
              onClick={(e) => onClickHandler(e)}
              style={{ position: "absolute", right: "7px", top: "11px" }}
            >
              <i className="fas fa-code"></i>
            </button>
            <textarea
              style={{ width: "100%", height: "15vh" }}
              ref={textareaRef}
              value={htmlResults}
            ></textarea>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
