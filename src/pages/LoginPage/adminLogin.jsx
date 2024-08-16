import React from "react";
import { Link } from "react-router-dom";
import "./adminLogin.css";

const AdminLogin = () => {
  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <div className="login-header-links">
          <Link to="/login" className="login-link">
            Login as Associate
          </Link>
          <span className="login-separator">|</span>
          <Link to="/admin-login" className="login-link yellow">
            Login as Admin
          </Link>
        </div>
        <div className="admin-login-header">
          <h2 className="admin-login-title">Admin Login</h2>
          <p className="admin-login-subtitle">Please enter your credentials</p>
        </div>
        <form className="admin-login-form">
          <div className="admin-login-field">
            <label htmlFor="username" className="admin-login-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="admin-login-input"
              placeholder="Username"
              required
            />
          </div>
          <div className="admin-login-field">
            <label htmlFor="adminId" className="admin-login-label">
              Admin ID
            </label>
            <input
              type="text"
              id="adminId"
              className="admin-login-input"
              placeholder="Enter unique 12 digit ID"
              required
            />
          </div>
          <div className="admin-login-field">
            <label htmlFor="password" className="admin-login-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="admin-login-input"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="admin-login-button">
            Login
          </button>
        </form>
        <a href="/forgot-password" className="admin-forgot-password-link">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;
