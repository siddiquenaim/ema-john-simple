import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
        {!user && (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
        {!user && (
          <Link to="/sign-up" className="nav-link">
            Sign-up
          </Link>
        )}
      </div>
      <p className="email">
        {user && (
          <span>
            Welcome, {user.email}{" "}
            <button className="btn-user" onClick={handleLogOut}>
              Sign Out
            </button>
          </span>
        )}
      </p>
    </nav>
  );
};

export default Header;
