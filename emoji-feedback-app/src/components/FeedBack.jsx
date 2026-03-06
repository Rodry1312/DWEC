import FeedbackItem from "./FeedBackItem"; 

function FeedbackList({ feedbackOptions, onSelectFeedback }) {
  return (
    <div>
      {feedbackOptions.map((option, index) => (
        <FeedbackItem
          key={index}
          option={option}
          onSelectFeedback={onSelectFeedback}
        />
      ))}
    </div>
  );
}

export default FeedbackList;