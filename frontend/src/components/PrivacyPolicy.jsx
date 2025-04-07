
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/privacyPolicy.css'; 

export default function PrivacyPolicy() {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>Privacy Policy</h1>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="legal-content">
        <section>
          <h2>1. Information We Collect</h2>
          <p>Our todo list app collects minimal data necessary for functionality:</p>
          <ul>
            <li>Task content you create</li>
            <li>Completion status of tasks</li>
            <li>Basic account information (if using authentication)</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Data</h2>
          <p>Your data is used solely for:</p>
          <ul>
            <li>Providing core todo list functionality</li>
            <li>Syncing across your devices</li>
            <li>Improving app performance</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>We implement industry-standard measures to protect your information:</p>
          <ul>
            <li>Encryption of data in transit</li>
            <li>Secure server infrastructure</li>
            <li>Regular security audits</li>
          </ul>
        </section>

        <div className="legal-footer">
          <Link to="/" className="back-button">Back to App</Link>
        </div>
      </div>
    </div>
  );
};