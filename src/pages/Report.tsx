import { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Chart } from "../components/Chart";
import { Table } from "../components/Table";
import Context from "../context";

export const Report: FC = () => {
  const { xName, yName, fileValues } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (fileValues.length === 0) {
      navigate("/upload");
    }
  }, [fileValues]);

  return (
    <>
      <h3>Here is the result:</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Table xName={xName} yName={yName} fileValues={fileValues} />
        </div>
        <div>
          <Chart data={fileValues} />
        </div>
      </div>
    </>
  );
};
