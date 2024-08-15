import React from 'react';
import { FaApple, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './userLogin.css';

const UserLogin = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header-links">
          <Link to="/login" className="login-link yellow">Login as User</Link>
          <span className="login-separator">|</span>
          <Link to="/admin-login" className="login-link">Login as Admin</Link>
        </div>
        <div className="login-header">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">
            Don't have an account yet? <a href="/signup" className="login-signup-link">Sign up</a>
          </p>
        </div>
        <form className="login-form">
          <div className="login-field">
            <label htmlFor="email" className="login-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="login-input"
              placeholder="email address"
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor="password" className="login-label">Password</label>
            <input
              type="password"
              id="password"
              className="login-input"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-alternative">
          <span className="login-or">OR</span>
          <div className="login-alt-buttons">
            <button className="login-alt-button">
              <FaApple className="login-icon" /> Apple
            </button>
            <button className="login-alt-button">
              <FaGoogle className="login-icon" /> Google
            </button>
            <button className="login-alt-button">
              <FaTwitter className="login-icon" /> X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
