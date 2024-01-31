import React from "react";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {user, setUser} = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ username, password})
  }

  if(user) {
    return <></>
  }

  return (
    <div>
      <h2>Login Component</h2>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      {" "}
      <input
        type="password"
        name="password"
        placeholder="jane.doe"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
