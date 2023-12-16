// src/components/Signup.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css"; // Import your custom CSS file

const Signup = () => {
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
      console.log("Signup Success..");
      navigate("/signin");
    }
  };

  return (
    <div className="custom-container">
      <form onSubmit={submitHandler} className="custom-form">
        <h1 className="custom-heading">SIGNUP PAGE</h1>

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
          Signup
        </button>

        <p className="custom-paragraph">
          Already have an account? <Link to="/signin">Signin</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
