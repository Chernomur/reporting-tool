import { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExcelReader from "../components/FileReader";
import { NextButton } from "../components/NextButton";
import Context from "../context";

export const Upload: FC = () => {
  const { userName, fileValues } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
  }, []);

  const handleClick = () => {
    navigate("/settings");
  };

  return (
    <>
      <h3>Nice to meet you {userName}</h3>
      <ExcelReader />
      {<NextButton disable={fileValues.length === 0} onClick={handleClick} />}
    </>
  );
};
