import "./style.scss";
import { FC } from "react";
import { ButtonProps } from "../../types/types";

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};
