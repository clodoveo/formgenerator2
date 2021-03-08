import { getTables } from "../adapters/graphql/tables";
import { getFields } from "../adapters/graphql/fields";

const elements = [
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "TextInput",
    icon: "fa fa-font"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    dataSourceTable: "",
    dataSorceLabel: "",
    dataSorceValue: "",
    dataOption: "",
    info: "",
    width: "12",
    class: "",
    component: "Select2",
    icon: "fa fa-caret-square-o-down"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "Number",
    icon: "fa fa-plus"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "Date",
    icon: "fa fa-calendar"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    icon: "fa fa-image"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "TextArea",
    icon: "fa fa-text-height"
  },
  {
    id: "",
    width: "12",
    class: "",
    component: "Hr",
    icon: "fa fa-arrows-h"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "H1",
    icon: "fas fa-heading"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "H2",
    icon: "fas fa-heading"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "H3",
    icon: "fas fa-heading"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "TabDelimiter",
    icon: "fas fa-align-justify"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "BtnSave",
    icon: "fas fa-save"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    dataSourceTable: "",
    dataSorceLabel: "",
    dataSorceValue: "",
    dataOption: "",
    info: "",
    width: "12",
    class: "",
    component: "Checkbox",
    icon: "far fa-check-square"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    dataSourceTable: "",
    dataSorceLabel: "",
    dataSorceValue: "",
    dataOption: "",
    info: "",
    width: "12",
    class: "",
    component: "Radio",
    icon: "far fa-dot-circle"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "Hidden",
    icon: "fas fa-eye-slash"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "Switch",
    icon: "fas fa-toggle-on"
  },
  {
    html: "",

    width: "12",
    class: "",
    component: "Div",
    icon: " fab fa-html5"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    dataSourceTable: "",
    dataSorceLabel: "",
    dataSorceValue: "",
    dataOption: "",
    info: "",
    width: "12",
    class: "",
    component: "FancyCb",
    icon: " fab fa-html5"
  }
];

// you can define the shape of the element inserted when nothing specified(ex... bulk)
const defaultElement = {
  id: "",
  label: "",
  name: "",
  placeholder: "",
  info: "",
  width: "12",
  class: "",
  component: "TextInput",
  icon: "fa fa-font"
};

export { elements, defaultElement, getTables, getFields };
