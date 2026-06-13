function FeedbackCard({ name, rating, comment }) {
  return (
    <div className="feedback-card">
      <h3>{name}</h3>

      <p>{"⭐".repeat(rating)}</p>

      <p>{comment}</p>

      {rating === 5 && <span>🌟 Featured Review</span>}
    </div>
  );
}

export default FeedbackCard;
