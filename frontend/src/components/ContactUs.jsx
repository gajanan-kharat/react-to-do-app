import React from "react";
import { Link } from "react-router-dom";
import "../styles/contactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="contact-content">
        <section className="contact-methods">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email Support</h3>
            <p>For general inquiries and support</p>
            <a href="mailto:support@todolistapp.com" className="contact-link">
              support@todolistapp.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🐦</div>
            <h3>Twitter</h3>
            <p>For quick questions and updates</p>
            <a
              href="https://twitter.com/todolistapp"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              @todolistapp
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>Feedback</h3>
            <p>Help us improve our app</p>
            <Link to="/feedback" className="contact-link">
              Submit Feedback
            </Link>
          </div>
        </section>

        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="ios-input" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="ios-input" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="ios-textarea"></textarea>
            </div>

            <button type="submit" className="ios-button">
              Send Message
            </button>
          </form>
        </section>
      </div>

      <div className="contact-footer">
        <Link to="/" className="back-button">
          Back to App
        </Link>
      </div>
    </div>
  );
}
