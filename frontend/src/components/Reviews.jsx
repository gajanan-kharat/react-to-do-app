// src/components/Reviews.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/reviews.css";

export default function Reviews() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("http://localhost:3000/feedback");
        if (!response.ok) throw new Error("Failed to fetch feedback");
        const data = await response.json();
        setFeedbacks(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) return <div className="loading">Loading reviews...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="reviews-container">
      <h1 className="reviews-header">User Feedback</h1>
      <div className="reviews-grid">
        {feedbacks.map((feedback) => (
          <div key={feedback._id} className="feedback-card">
            <div className="feedback-header">
              <h3>{feedback.name}</h3>
              <span className="feedback-date">
                {new Date(feedback.createdAt).toLocaleDateString()}
              </span>
            </div>
            <a href={`mailto:${feedback.email}`} className="feedback-email">
              {feedback.email}
            </a>
            <p className="feedback-message">{feedback.message}</p>
          </div>
        ))}
      </div>
      <div className="button-group">

      <Link to="/feedback" style={{ marginRight: "10px" }} className="back-button">
        Submit Your Feedback
      </Link>
      <Link to="/" className="back-button">
        Back to App
      </Link>
      </div>
    </div>
  );
}
