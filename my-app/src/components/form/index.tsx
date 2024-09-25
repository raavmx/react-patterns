import React, { useState, FormEvent, ChangeEvent } from "react";
import "./style.scss";
import { FormProps } from "../../types/types";
import { addUser } from "../../client/api";

const Form: React.FC<FormProps> = ({ onUserAddition }) => {
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [website, setWebsite] = useState<string>("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handlewebsiteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWebsite(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUser({ username, phone, website }).then((user) => onUserAddition(user));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
      </div>
      <div>
        <label>
          Website:
          <input type="email" value={website} onChange={handlewebsiteChange} />
        </label>
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
