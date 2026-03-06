import { useState } from "react";
import FeedbackList from "./components/FeedBack"; 
import SelectedFeedbackDisplay from "./components/SelectedFeedbackDisplay";

function App() {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const feedbackOptions = [
    { emoji: "😊", message: "Happy" },
    { emoji: "😐", message: "Neutral" },
    { emoji: "😢", message: "Sad" },
    { emoji: "🤔", message: "Thinking" }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Emoji Feedback App</h1>
      <FeedbackList
        feedbackOptions={feedbackOptions}
        onSelectFeedback={setSelectedFeedback}
      />
      <SelectedFeedbackDisplay selectedFeedback={selectedFeedback} />
      {selectedFeedback && (
        <button onClick={() => setSelectedFeedback(null)}>
          Reset Feedback
        </button>
      )}
    </div>
  );
}

export default App;

