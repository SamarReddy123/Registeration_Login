// src/components/Logout.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Logout.css"; // Import your custom CSS file

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout Success..");
    navigate("/signin");
  };

  return (
    <div className="custom-container">
      <div className="custom-content">
        <h1 className="custom-heading">LOGOUT PAGE</h1>
        <p className="custom-paragraph">Are you sure you want to logout?</p>
        <button
          className="custom-button"
          onClick={handleLogout}
        >
          Logout
        </button>
        <Link to="/signin" className="custom-link">Cancel</Link>
        <div className="custom-data">
          {/* Add some data or content here */}
          <p>Data or content goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default Logout;
