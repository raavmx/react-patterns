import { Button } from "../button";
import "./style.scss";
import { FC } from "react";
import { ButtonWithLabelProps } from "../../types/types";

export const ButtonWithLabel: FC<ButtonWithLabelProps> = ({label,  ...restProps}) => {
  return (
    <div className="button-with-label">
      <p>{label}</p>
      <Button {...restProps} />
    </div>
  );
};