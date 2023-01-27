import { createContext, Dispatch } from "react";
import { fileValueType } from "./types/fileValues";

type defaultStateType = {
  userName: string;
  setUserName: Dispatch<React.SetStateAction<string>>;
  fileValues: fileValueType[];
  setFileValues: Dispatch<React.SetStateAction<fileValueType[]>>;
  xName: string;
  setXName: Dispatch<React.SetStateAction<string>>;
  yName: string;
  setYName: Dispatch<React.SetStateAction<string>>;
};

const defaultState: defaultStateType = {
  userName: "",
  setUserName: () => {},
  fileValues: [],
  setFileValues: () => {},
  xName: "x",
  setXName: () => {},
  yName: "y",
  setYName: () => {},
};

const Context = createContext(defaultState);

export default Context;
