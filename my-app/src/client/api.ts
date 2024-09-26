import { UserProps } from "../types/types";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = (): Promise<UserProps[]> =>
  fetch(apiUrl).then((response) => response.json());

export const addUser = (user: UserProps): Promise<UserProps> =>
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
