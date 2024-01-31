import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(undefined)
  }

  if (user) {
    return (
      <div>
        <h2>Profile Component</h2>
        <span>Hello, {user.username}</span>
        <br />
        <button onClick={handleLogout}>Log Out</button>
      </div>
    );
  }

  return <></>
};

export default Profile;
