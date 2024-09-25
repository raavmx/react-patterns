import { FC } from "react";
import "./style.scss";
import { UserProps } from "../../types/types";
import { CardInfo } from "./parts/cardInfo";

export const MemberCard: FC<UserProps> = ({ name, ...restProps }) => {
  return (
    <div className="member-card">
      <p className="title">{name}</p>
      <CardInfo {...restProps} />
    </div>
  );
};
