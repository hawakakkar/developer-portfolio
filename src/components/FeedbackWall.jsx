import { useState } from "react";

function FeedbackWall() {
  const [sortOrder, setSortOrder] = useState("high");

  const feedbacks = [
    {
      id: 1,
      name: "John",
      rating: 5,
      comment: "Excellent portfolio and great projects!",
    },
    {
      id: 2,
      name: "Sara",
      rating: 4,
      comment: "Very professional design.",
    },
    {
      id: 3,
      name: "Ali",
      rating: 5,
      comment: "Amazing React skills.",
    },
  ];

  const sortedFeedbacks = [...feedbacks].sort((a, b) =>
    sortOrder === "high" ? b.rating - a.rating : a.rating - b.rating,
  );

  return (
    <section className="feedback-wall">
      <section id="feedback">
        <h2>Visitor Feedback</h2>
      </section>
      <div className="feedback-buttons">
        <button onClick={() => setSortOrder("high")}>Highest Rating</button>

        <button onClick={() => setSortOrder("low")}>Lowest Rating</button>
      </div>

      {sortedFeedbacks.map((feedback) => (
        <div key={feedback.id} className="feedback-card">
          <h3>{feedback.name}</h3>

          <p>{"⭐".repeat(feedback.rating)}</p>

          <p>{feedback.comment}</p>

          {feedback.rating === 5 && <span>🌟 Featured Review</span>}
        </div>
      ))}
    </section>
  );
}

export default FeedbackWall;
