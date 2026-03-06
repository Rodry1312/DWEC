function SelectedFeedbackDisplay({ selectedFeedback }) {
  if (!selectedFeedback) {
    return <p>Please select an emoji</p>;
  }

  return (
    <div>
      <h2>{selectedFeedback.emoji}</h2>
      <p>{selectedFeedback.message}</p>
    </div>
  );
}

export default SelectedFeedbackDisplay;
