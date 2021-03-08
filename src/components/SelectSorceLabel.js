import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { optionfamily, tableAtom } from "../atoms/optionsState";
import { getFields } from "../adapters/graphql/fields";

import styled from "styled-components";

export default function SelectSorceLabel(props) {
  const { item } = props;
  const { field } = props;
  const { onChangeHandler } = props;

  const { value } = props;

  const [connectedFields, setConnectedFields] = useState(["ID", "title"]);

  const [table] = useRecoilState(tableAtom(item.id));

  useEffect(() => {
    async function getFieldLabels() {
      const fieldsLabel = await getFields(table);

      setConnectedFields(fieldsLabel);
    }
    getFieldLabels();
  }, [table]);

  const fieldOption = connectedFields.map((cf, k) => (
    <option key={"SelectSorceLabel-" + k} value={cf}>
      {cf}
    </option>
  ));

  return (
    <select value={value} onChange={(e) => onChangeHandler(e, item, field)}>
      {fieldOption}
    </select>
  );
}
