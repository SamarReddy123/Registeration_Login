// src/components/Signin.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signin.css"; // Import your custom CSS file

const Signin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = data;

  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.length < 5) {
      alert("Username characters must be greater than 5");
    } else if (password !== "samar") {
      alert("Incorrect password");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
     
      navigate("/logout");
    }
  };

  return (
    <div className="custom-container">
      <form onSubmit={submitHandler} className="custom-form">
        <h1 className="custom-heading">LOGIN PAGE</h1>

        <label className="custom-label">
          USERNAME :
          <input
            className="custom-input"
            type="text"
            name="username"
            value={username}
            onChange={handler}
          />
        </label>

        <label className="custom-label">
          EMAIL :
          <input
            className="custom-input"
            type="email"
            name="email"
            value={email}
            onChange={handler}
          />
        </label>

        <label className="custom-label">
          PASSWORD :
          <input
            className="custom-input"
            type="password"
            name="password"
            value={password}
            onChange={handler}
          />
        </label>

        <label className="custom-label">
          CONFIRM PASSWORD :
          <input
            className="custom-input"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handler}
          />
        </label>

        <button className="custom-button" type="submit">
          Login
        </button>

        <p className="custom-paragraph">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
