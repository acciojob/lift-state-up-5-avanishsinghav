
import React, { useState } from "react";

const Child = ({ isLoggedIn, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login validation here
    // For simplicity, assuming login is successful
    onLogin();
  };

  if (isLoggedIn) {
    return <p>You are logged in!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        className="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <br />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        className="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />

      <button type="submit">Login</button>
    </form>
  );
};

export default Child;
