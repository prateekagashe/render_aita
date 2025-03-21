// src/components/LoginForm.js
import React, { useState } from "react";
import "./LoginForm.css";
import { FaUserAlt, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the form submission,
    // like sending the data to a backend server.
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <FaUserAlt className="input-icon" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="footer">
          <a href="/#">Forgot Password?</a>
          <a href="/#">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;