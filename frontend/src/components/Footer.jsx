import React from "react";
import "../styles/footer.css"
import {Link} from "react-router-dom"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} Todo List App. All rights reserved.
          </p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms Of Service</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <p className="app-version">Version 1.0.1</p>
        </div>
      </div>
    </footer>
  );
}
