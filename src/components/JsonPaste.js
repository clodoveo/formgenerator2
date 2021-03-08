import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 14vh;
`;

const StyledLabel = styled.label`
  display: block;
  color: #abb2bf;
  text-align: center;
  font-size: 0.9em;
  padding: 5px;
`;

const StyledJsonPaste = styled.textarea`
  width: 100%;
  height: 14vh;
  background: none;
  color: #ccc;
  border: none;
  outline: none;
  resize: none;
  border-bottom: 1px solid #ccc;
`;

export default function JsonPaste(props) {
  const { setSelectedItemsList } = props;

  const [jsonValue, setJsonValue] = useState("");
  const [validJson, setValidJson] = useState(false);

  const onChangeHandler = (e) => {
    setJsonValue(e.target.value);

    try {
      setSelectedItemsList(JSON.parse(e.target.value));
      setValidJson(true);
    } catch {
      setValidJson(false);
    }
  };

  return (
    <StyledContainer>
      <StyledLabel>Paste Json Here</StyledLabel>
      {validJson ? (
        <label style={{ color: "green" }}>valid Json</label>
      ) : (
        <label style={{ color: "red" }}>NON valid Json</label>
      )}
      <StyledJsonPaste onChange={(e) => onChangeHandler(e)} value={jsonValue} />
    </StyledContainer>
  );
}
