import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import uniqueId from "lodash";
import { optionfamily, tableAtom } from "../../atoms/optionsState";
import { getData } from "../../adapters/graphql/data";
import FancyCbItem from "./FancyCbItem";

const FancyCb = (props) => {
  const { itemId } = props;
  const { item } = props;
  //const [item] = useRecoilState(itemAtom(itemId));
  const [ss, setSs] = useRecoilState(optionfamily(itemId));
  const [tableAtomIstance] = useRecoilState(tableAtom(itemId));

  useEffect(() => {
    async function fetchData() {
      const newData = await getData(tableAtomIstance);
      setSs(newData);
    }
    fetchData();
  }, [tableAtomIstance]);

  let className = item.width !== "" ? "col-md-" + item.width : "col-md-12";
  if (item.width === "full") {
    className = "";
  }
  console.log("tableAtomIstance", ss);
  return (
    <div key={itemId} className={className} style={{ maxHeight: "125px" }}>
      <div className="form-group">
        <label>{item.label}</label>
        <div>
          {ss.map((o, k) => (
            <FancyCbItem key={() => uniqueId()} k={k} o={o} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FancyCb;
