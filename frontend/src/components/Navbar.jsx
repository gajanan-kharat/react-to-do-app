import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="main-header">
      <NavLink to="/about" id="logo-link">
        <img className="header-logo" src="/todo.svg" alt="Logo" />
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/todos"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        My List
      </NavLink>
      <NavLink
        to="/reviews"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Reviews
      </NavLink>
    </nav>
  );
}
