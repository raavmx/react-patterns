import { memo } from "react";
import { MemberCard } from "../memberCard";
import { ButtonWithLabel } from "../buttonWithLabel";
import { useGetUsers } from "../../hooks/useGetUsers";

export const UserList = memo(() => {
  const { users, getUsers } = useGetUsers();

  return (
    <>
      {users.map((user, idx) => (
        <MemberCard key={idx} {...user} />
      ))}
      <ButtonWithLabel onClick={getUsers} label="нажми меня!">
        more users
      </ButtonWithLabel>
    </>
  );
});
