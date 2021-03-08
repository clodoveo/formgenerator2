import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { optionfamily, tableAtom } from "../../atoms/optionsState";
import { getData } from "../../adapters/graphql/data";

const Radio = (props) => {
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
            <div
              className="form-check form-check-inline"
              key={"radio-internal-option-" + k}
            >
              <input
                name="inlineRadioOptions"
                className="form-check-input"
                type="radio"
                id="inlineCheckbox1"
                value={o[item.dataSorceValue]}
              />
              <label className="form-check-label" for="inlineCheckbox1">
                {o[item.dataSorceLabel]}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Radio;
