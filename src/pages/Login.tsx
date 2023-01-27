import { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NextButton } from "../components/NextButton";
import TextField from "../components/TextField";
import Context from "../context";

export const Login: FC = () => {
  const { setUserName, userName } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("userName")) {
      navigate("/upload");
    }
  }, [navigate]);

  const handleClick = () => {
    window.localStorage.setItem("userName", userName);

    navigate("/upload");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <h3>Hi stranger! Plz enter your name</h3>
      <div>
        <TextField onChange={handleChange} />
      </div>
      <div>
        <NextButton onClick={handleClick} />
      </div>
    </>
  );
};
