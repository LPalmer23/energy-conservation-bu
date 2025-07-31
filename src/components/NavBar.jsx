// src/components/NavBar.jsx
import { Link } from "react-router-dom";
import buLogo from "../assets/BUlogo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={buLogo} alt="BU Logo" />
      </div>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/learnmore" className="navbar-link">Learn More</Link>
        <Link to="/submit" className="navbar-link">Submit</Link>
        <Link to="/charts" className="navbar-link">Charts</Link>
      </div>

      <div className="navbar-right">
        <Link to="/contact" className="contact-button">CONTACT</Link>
        <span className="search-icon">🔍</span>
      </div>

    </nav>
  );
}
