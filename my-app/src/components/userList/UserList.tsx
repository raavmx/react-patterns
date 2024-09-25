import { FC } from "react";
import { MemberCard } from "../memberCard";
import { ButtonWithLabel } from "../buttonWithLabel";
import { UserProps } from "../../types/types";

export interface UserListProps {
  users: UserProps[];
  onClickMoreUsers: () => void;
}

export const UserList: FC<UserListProps> = ({ users, onClickMoreUsers }) => {
  return (
    <>
      {users.map((user, idx) => (
        <MemberCard key={idx} {...user} />
      ))}
      <ButtonWithLabel onClick={onClickMoreUsers} label="нажми меня!">
        more users
      </ButtonWithLabel>
    </>
  );
};
