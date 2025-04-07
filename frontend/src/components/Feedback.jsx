import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/feedback.css"
import { submitFeedback } from "../services/feedbackService";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState(null);

  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitFeedback(formData);
      setSuccess(true);
      setTimeout(() => navigate("/", 3000));
    } catch (err) {
      setError(err.message || "Failed to submit feedback");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-container">
      <h1>Submit Feedback</h1>
      <p>We appreciate your thoughts on how we can improve</p>

      {success ? (
        <div className="success-message">
          <p>Thank you for your feedback!</p>
          <p>Redirecting you back home...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="ios-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="ios-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="ios-textarea"
              rows="5"
            />
          </div>

          {error && (
            <div className="error-message">
              <p>⚠️ {error}</p>
              <p>Please check your connection and try again.</p>
            </div>
          )}
          <button type="submit" className="ios-button" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      )}
    </div>
  );
}
