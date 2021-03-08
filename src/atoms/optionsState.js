import { atom, atomFamily } from "recoil";

export const tableAtom = atomFamily({
  key: "tableAtom",
  default: ""
});

export const itemAtom = atomFamily({
  key: "itemAtom",
  default: {}
});

export const optionsState = atom({
  key: "optionsState",
  default: [{ ID: 1, title: "ciccio" }]
});

export const optionfamily = atomFamily({
  key: "myOptionFamily",
  default: (param) => {
    return [{}];
  }
});
