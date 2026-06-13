import { useState } from "react";
import FeedbackCard from "./FeedbackCard";

function FeedbackWall() {
  const [sortOrder, setSortOrder] = useState("high");

  const feedbacks = [
    {
      id: 1,
      name: "Zayn",
      rating: 5,
      comment: "Excellent portfolio and great projects!",
    },
    {
      id: 2,
      name: "Nida",
      rating: 4,
      comment: "Very professional design.",
    },
    {
      id: 3,
      name: "Arash",
      rating: 5,
      comment: "Amazing React skills.",
    },
  ];

  const sortedFeedbacks = [...feedbacks].sort((a, b) =>
    sortOrder === "high" ? b.rating - a.rating : a.rating - b.rating,
  );

  return (
    <section className="feedback-wall">
      <h2>Visitor Feedback</h2>

      <div className="feedback-buttons">
        <button onClick={() => setSortOrder("high")}>Highest Rating</button>

        <button onClick={() => setSortOrder("low")}>Lowest Rating</button>
      </div>

      {sortedFeedbacks.map((feedback) => (
        <FeedbackCard
          key={feedback.id}
          name={feedback.name}
          rating={feedback.rating}
          comment={feedback.comment}
        />
      ))}
    </section>
  );
}

export default FeedbackWall;
