export const submitFeedback = async (feedbackData) => {
  const response = await fetch("http://localhost:3000/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedbackData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit feedback");
  }

  return data;
};
