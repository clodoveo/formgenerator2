import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SelectSorceLabel from "./SelectSorceLabel";
import { useSetRecoilState } from "recoil";
import { tableAtom } from "../atoms/optionsState";

const StyledItemDetails = styled.div`
  display: block;
  background-color: #282c34;
  font-size: 12px;
  width: 100%;
  overflow-y: scroll;

  color: #d19a66;
  height: 93%;
  padding: 5px;
  padding-bottom: 50px;
`;

const StyledInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  font-size: 16px;
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
  color: #98c379;
  &:focus {
    outline: none;
    background-color: #ccc;
    border: none;
    border-bottom: 1px solid #999;
    color: #666;
  }
`;

const StyledTextarea = styled.textarea`
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  font-size: 16px;
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
  color: #98c379;
  height:250px &:focus {
    outline: none;
    background-color: #ccc;
    border: none;
    border-bottom: 1px solid #999;
    color: #666;
  }
`;

const StyledSelect = styled.select`
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  outline: none;
  width: 100%;
  color: #98c379;
  padding: 5px;
  margin-bottom: 15px;
  font-size: 16px;
`;

export default function ItemDatails(props) {
  const { selectedItemsList, setSelectedItemsList } = props;
  const { setSelectedItem } = props;
  const { item } = props;
  const { elements } = props;
  const { tables } = props;
  const { getFields } = props;

  const [table, setTable] = useState("");

  const SetAtomTable = useSetRecoilState(tableAtom(item.id));

  const onChangeHandler = async (e, item, field) => {
    const newValue = e.target.value;
    const i = selectedItemsList.findIndex((o) => o.position === item.position);
    const newSelectedItemsList = selectedItemsList;
    let newItem = {};

    switch (field) {
      case "component":
        const elementBlueprint = elements.find(
          (el) => el.component === newValue
        );
        //newItem = { ...elementBlueprint, ...item, component: newValue };

        for (let eb in elementBlueprint) {
          newItem[eb] = item[eb];
        }
        newItem.component = newValue;
        break;
      case "dataSourceTable":
        newItem = { ...item };
        newItem[field] = newValue;
        //await getFieldLabels(newValue);
        setTable(newValue);
        SetAtomTable(newValue);
        break;
      default:
        newItem = { ...item };
        newItem[field] = newValue;
    }

    newSelectedItemsList[i] = newItem;

    setSelectedItemsList((old) => newSelectedItemsList);
    setSelectedItem((old) => newItem);
  };

  const itemFieldsKey = Object.keys(item);

  const fieldsOption = elements.map((f, k) => (
    <option value={f.component} key={"itemFieldsKey-" + k}>
      {f.component}
    </option>
  ));

  const tableOption = tables.map((f, k) => (
    <option key={"tableOption-" + k} value={f}>
      {f}
    </option>
  ));

  const inputFiledComponent = (field, item) => {
    switch (field) {
      case "component":
        return (
          <StyledSelect
            value={item.component}
            onChange={(e) => onChangeHandler(e, item, field)}
          >
            {fieldsOption}
          </StyledSelect>
        );
      case "dataSourceTable":
        return (
          <StyledSelect
            value={item.dataSourceTable}
            onChange={(e) => onChangeHandler(e, item, field)}
          >
            {tableOption}
          </StyledSelect>
        );
      case "dataSorceLabel":
        return (
          <SelectSorceLabel
            value={item.dataSourceLabel}
            onChangeHandler={onChangeHandler}
            item={item}
            field={field}
            table={table}
            getFields={getFields}
          ></SelectSorceLabel>
        );
      case "html":
        return (
          <StyledTextarea
            value={item[field]}
            onChange={(e) => onChangeHandler(e, item, field)}
          />
        );
      default:
        return (
          <StyledInput
            type="text"
            value={item[field]}
            onChange={(e) => onChangeHandler(e, item, field)}
          />
        );
    }
  };

  const inputFields = itemFieldsKey.map((field, k) => (
    <div key={k}>
      <label>{field}</label>
      {inputFiledComponent(field, item)}
    </div>
  ));

  return (
    <StyledItemDetails>
      <legend>
        {item.component}: {item.name}
      </legend>
      {inputFields}
    </StyledItemDetails>
  );
}
