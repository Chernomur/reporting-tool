import { FC } from "react";
import "./style.css";
type NextButtonPropsType = {
  disable?: boolean;
  onClick: () => void;
};

export const NextButton: FC<NextButtonPropsType> = (props) => {
  const { onClick, disable } = props;

  return (
    <div
      className={`next-button ${disable ? "disable" : ""}`}
      onClick={onClick}
    >
      Next
    </div>
  );
};
