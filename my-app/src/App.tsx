import "./App.scss";
import { MemberCard } from "../src/components/memberCard";
import { useEffect, useState } from "react";
import { UserProps } from "./types/types";
import Form from "./components/form";
import { Tabs } from "./components/tabs";
import { UserList } from "./components/userList/UserList";
import { fetchUsers } from "./client/api";

export default function App() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [tabForm, setTabForm] = useState(true);
  const [addedUser, setAddedUser] = useState<UserProps | null>(null);

  useEffect(() => {
    fetchUsers().then((res) => setUsers(res));
  }, []);

  const onUserAddition = (user: UserProps) => {
    setAddedUser(user);
  };

  return (
    <div className="App">
      <Tabs onChange={setTabForm} />
      {tabForm ? <Form onUserAddition={onUserAddition} /> : <UserList />}
      {addedUser && <MemberCard {...addedUser} />}
    </div>
  );
}
