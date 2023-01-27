import { FC, ReactNode, useEffect, useState } from "react";
import Context from "./context";
import { fileValueType } from "./types/fileValues";

type ContextProviderType = { children: ReactNode };

export const ContextProvider: FC<ContextProviderType> = ({ children }) => {
  const [userName, setUserName] = useState<string>("");
  const [fileValues, setFileValues] = useState<fileValueType[]>([]);
  const [xName, setXName] = useState<string>("");
  const [yName, setYName] = useState<string>("");

  useEffect(() => {
    setUserName(window.localStorage.getItem("userName") ?? "");
  }, []);

  return (
    <Context.Provider
      value={{
        userName,
        setUserName,
        xName,
        setXName,
        yName,
        setYName,
        fileValues,
        setFileValues,
      }}
    >
      {children}
    </Context.Provider>
  );
};
