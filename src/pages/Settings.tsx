import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NextButton } from "../components/NextButton";
import TextField from "../components/TextField";
import Context from "../context";

export const Settings: FC = () => {
  const { setXName, setYName, fileValues } = useContext(Context);
  const navigate = useNavigate();
  const [x, setX] = useState("x");
  const [y, setY] = useState("y");

  useEffect(() => {
    if (fileValues.length === 0) {
      navigate("/upload");
    }
  }, [fileValues]);

  const handleClick = () => {
    setXName(x);
    setYName(y);
    navigate("/report");
  };

  return (
    <>
      <h3>
        Fine, now please specify names of columns for “X” and “Y” dimensions (or
        leave them default)
      </h3>
      <div>
        Column with “X” data:
        <TextField placeholder="X" onChange={(e) => setX(e.target.value)} />
      </div>
      <div>
        Column with “Y” data:
        <TextField placeholder="Y" onChange={(e) => setY(e.target.value)} />
      </div>
      <NextButton onClick={handleClick} />
    </>
  );
};
