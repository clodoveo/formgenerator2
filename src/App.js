import React, { useState, useEffect } from "react";
import { RecoilRoot } from "recoil";

import uniqueId from "lodash";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainWrapper from "./components/MainWrapper";
import FormElementsCol from "./components/FormElementsCol";
import CenterCol from "./components/CenterCol";
import ItemDetailsCol from "./components/ItemDetailsCol";
import FormElementsList from "./components/FormElementsList";
import DropHere from "./components/DropHere";
import ItemDetails from "./components/ItemDetails";

import { elements, defaultElement, getTables, getFields } from "./settings/";

export default function App() {
  const [selectedItemsList, setSelectedItemsList] = useState([]);
  const [draggedItem, setDraggedItem] = useState({});
  const [selectedItem, setSelectedItem] = useState({});

  const [tables, setTables] = useState([]);
  const [table, setTable] = useState("");
  const [fields, setFields] = useState([]);

  const tableChangeHandler = (e) => {
    setTable(e.target.value);
  };

  useEffect(() => {
    async function fetchTables() {
      const fetchedTables = await getTables();
      console.log(fetchedTables);
      setTables(fetchedTables);
    }
    fetchTables();
  }, []);

  useEffect(() => {
    async function fetchFields() {
      const fetchedFields = await getFields(table);
      console.log(fetchedFields);
      setFields(fetchedFields);
    }
    if (table !== "") fetchFields();
  }, [table]);

  const onClickHandler = (e, f) => {
    const defaultItem = defaultElement;
    setSelectedItemsList((old) => {
      const newList = [...old, defaultItem];
      return newList;
    });
    setSelectedItem(defaultItem);
  };

  const addAllClickHandler = () => {
    let myMaxId = 0;
    if (selectedItemsList.length > 0) {
      myMaxId = maxId(selectedItemsList);
    }
    const all = fields.map((f, k) => {
      const newId = myMaxId + 1 + k ? myMaxId + 1 + k : k;
      return { ...defaultElement, name: f, label: f, id: newId, position: k };
    });
    setSelectedItemsList((old) => {
      const newList = [...old, ...all];
      return newList;
    });
  };

  const maxId = (o) => o.reduce((max, o) => (o.id > max ? o.id : max), o[0].id);

  let SelectField = "";
  if (table !== "") {
    //const fields = getFields(table);
    SelectField = (
      <div>
        <label style={{ color: "#ccc" }}>Click to insert: </label>
        <button
          className="btn btn-secondary"
          style={{ marginRight: "10px", float: "right" }}
          onClick={addAllClickHandler}
        >
          <i className="fa fa-plus" /> Insert All
        </button>
        <ul>
          {fields.map((f) => (
            <li
              key={"right-select-field-" + f}
              onClick={(e) => onClickHandler(e, f)}
              style={{
                color: "#98c379",
                listStyle: "none",
                width: "150px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                cursor: "pointer"
              }}
            >
              + {f}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <MainWrapper>
          <ItemDetailsCol title="Field Params" colWidth={250}>
            <ItemDetails
              elements={elements}
              item={selectedItem}
              setSelectedItemsList={setSelectedItemsList}
              selectedItemsList={selectedItemsList}
              setSelectedItem={setSelectedItem}
              table={table}
              fields={fields}
              tables={tables}
              getFields={getFields}
            />
          </ItemDetailsCol>
          <CenterCol
            selectedItemsList={selectedItemsList}
            setSelectedItemsList={setSelectedItemsList}
            draggedItem={draggedItem}
            setDraggedItem={setDraggedItem}
            setSelectedItem={setSelectedItem}
          >
            <div className="container">
              <div className="row ">
                <DropHere
                  selectedItemsList={selectedItemsList}
                  setSelectedItemsList={setSelectedItemsList}
                  draggedItem={draggedItem}
                  position={0}
                  setSelectedItem={setSelectedItem}
                  className="col-md-12"
                />
              </div>
            </div>
          </CenterCol>
          <FormElementsCol colWidth={350}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div>
                  <button
                    onClick={() => {
                      sessionStorage.clear();
                      location.reload();
                    }}
                  >
                    Clear cache
                  </button>
                </div>
                <label style={{ color: "#ccc" }}>Select a table:</label>
                <select
                  style={{ width: "100%" }}
                  onChange={(e) => tableChangeHandler(e)}
                >
                  {tables.map((t, k) =>
                    t !== undefined ? (
                      <option key={"right-select-table-" + k} value={t}>
                        {t}
                      </option>
                    ) : null
                  )}
                </select>
                <hr />
                {SelectField}
              </div>
              <div>
                <label style={{ color: "#ccc" }}>Add:</label>
                <FormElementsList
                  elements={elements}
                  draggedItem={draggedItem}
                  setDraggedItem={setDraggedItem}
                  selectedItemsList={selectedItemsList}
                  setSelectedItemsList={setSelectedItemsList}
                  setSelectedItem={setSelectedItem}
                  style={{ display: "flex", marginRight: "12px" }}
                />
              </div>
            </div>
          </FormElementsCol>
        </MainWrapper>

        <Footer
          selectedItemsList={selectedItemsList}
          setSelectedItemsList={setSelectedItemsList}
        />
      </div>
    </RecoilRoot>
  );
}
