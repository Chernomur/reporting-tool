import { FC } from "react";
import { fileValueType } from "../../types/fileValues";
import "./style.css";

type tablePropsType = {
  xName: string;
  yName: string;
  fileValues: fileValueType[];
};

export const Table: FC<tablePropsType> = ({ xName, yName, fileValues }) => {
  return (
    <>
      <table>
        <tr>
          <th>{xName}</th>
          <th>{yName}</th>
        </tr>
        {fileValues.map((item, index: number) => {
          const values = Object.values(item);
          if (
            values.length >= 2 &&
            typeof values[0] === "number" &&
            typeof values[1] === "number"
          ) {
            return (
              <tr key={index}>
                <td>{values[0]}</td>
                <td>{values[1]}</td>
              </tr>
            );
          }
        })}
      </table>
    </>
  );
};
