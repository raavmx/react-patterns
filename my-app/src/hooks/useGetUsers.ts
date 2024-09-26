import { useCallback, useEffect, useMemo, useState } from "react";
import { UserProps } from "../types/types";
import { fetchUsers } from "../client/api";

interface UserListProps {
  users: UserProps[];
  getUsers: () => void;
}

export const useGetUsers = (): UserListProps => {
  const [users, setUsers] = useState<UserProps[]>([]);

  const getUsers = useCallback(() => {
    fetchUsers().then((res) => setUsers([...users, ...res]));
  }, [users]);

  useEffect(() => {
    if (users.length) return;
    getUsers();
  }, [getUsers, users.length]);

  return useMemo(() => ({ users, getUsers }), [getUsers, users]);
};
