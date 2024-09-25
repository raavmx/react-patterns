import { Button } from "../button";
import "./style.scss";
import { FC } from "react";
import { TabsProps } from "../../types/types";

export const Tabs: FC<TabsProps> = ({ onChange }) => {
  return (
    <div className="tab">
      <Button onClick={() => onChange(false)}>users</Button>
      <Button onClick={() => onChange(true)}>form</Button>
    </div>
  );
};
