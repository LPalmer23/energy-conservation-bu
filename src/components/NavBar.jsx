// src/components/NavBar.jsx
import { NavLink } from "react-router-dom";
import buLogo from "../assets/BUlogo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={buLogo} alt="BU Logo" />
      </div>

      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
        >
          Home
        </NavLink>
        <NavLink
          to="/learnmore"
          className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
        >
          Learn More
        </NavLink>
        <NavLink
          to="/submit"
          className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
        >
          Submit
        </NavLink>
        <NavLink
          to="/charts"
          className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
        >
          Charts
        </NavLink>
      </div>

      <div className="navbar-right">
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "contact-button active" : "contact-button"}
        >
          CONTACT
        </NavLink>
        <span className="search-icon">🔍</span>
      </div>
    </nav>
  );
}
