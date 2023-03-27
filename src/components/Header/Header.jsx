import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a className="nav-link" href="/shop">
          Shop
        </a>
        <a className="nav-link" href="/order">
          Order
        </a>
        <a className="nav-link" href="/inventory">
          Inventory
        </a>
        <a className="nav-link" href="/login">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Header;
