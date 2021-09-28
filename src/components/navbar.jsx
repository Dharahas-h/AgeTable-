import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand"> Navbar</span>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/app">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/other">
              Other
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
