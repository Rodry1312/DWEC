
function FeedbackItem({ option, onSelectFeedback }) {
  return (
    <span
      style={{ fontSize: "2rem", cursor: "pointer", margin: "10px" }}
      onClick={() => onSelectFeedback(option)}
    >
      {option.emoji}
    </span>
  );
}

export default FeedbackItem;
