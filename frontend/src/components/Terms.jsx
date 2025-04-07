// TermsOfService.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/terms.css';

export default function Terms(){
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>Terms of Service</h1>
        <p>Effective Date: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="legal-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By using our todo list application, you agree to these terms.</p>
        </section>

        <section>
          <h2>2. User Responsibilities</h2>
          <ul>
            <li>You must not use the service for illegal purposes</li>
            <li>You are responsible for maintaining the confidentiality of your account</li>
            <li>You must not upload harmful or malicious content</li>
          </ul>
        </section>

        <section>
          <h2>3. Limitation of Liability</h2>
          <p>We are not liable for:</p>
          <ul>
            <li>Any indirect, incidental damages</li>
            <li>Loss of data or content</li>
            <li>Service interruptions beyond our control</li>
          </ul>
        </section>

        <div className="legal-footer">
          <Link to="/" className="back-button">Back to App</Link>
        </div>
      </div>
    </div>
  );
};