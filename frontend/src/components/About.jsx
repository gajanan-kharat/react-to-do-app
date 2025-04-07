// AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our App</h1>
        <p>Designed to simplify your daily tasks</p>
      </div>

      <div className="about-content">
        <section className="about-card">
          <div className="card-icon">📱</div>
          <h2>Our Mission</h2>
          <p>
            We created this todo list app to help you stay organized with 
            a clean, intuitive interface that feels native to your device.
          </p>
        </section>

        <section className="about-card">
          <div className="card-icon">✨</div>
          <h2>Key Features</h2>
          <ul>
            <li>Simple task management</li>
            <li>Cross-device synchronization</li>
            <li>Priority tagging</li>
            <li>Reminders and due dates</li>
            <li>Collaborative lists</li>
          </ul>
        </section>

        <section className="about-card">
          <div className="card-icon">👨‍💻</div>
          <h2>How To Use</h2>
          <ol>
            <li>Add tasks with just one tap</li>
            <li>Swipe to complete or delete</li>
            <li>Organize with tags</li>
            <li>Share lists with others</li>
          </ol>
        </section>
      </div>

      <div className="about-footer">
        <Link to="/" className="ios-button">
          Get Started
        </Link>
      </div>
    </div>
  );
}