import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/" className="nav-link">
          Shop
        </Link>
        <Link to="/orders" className="nav-link">
          Orders
        </Link>
        <Link to="/inventory" className="nav-link">
          Inventory
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;
