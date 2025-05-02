import React, { useState } from "react";
import questions from "./data/questions";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (choice) => {
    setSelected(choice);
  };

  const nextQuestion = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected("");
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1>General Knowledge Quiz</h1>
      {showResult ? (
        <div className="result">
          <h2>Quiz Completed</h2>
          <p>Correct Answers: {score}</p>
          <p>Score: {(score / questions.length) * 100}%</p>
        </div>
      ) : (
        <div className="question-card">
          <h2>Q{current + 1}: {questions[current].question}</h2>
          <ul>
            {questions[current].choices.map((choice, index) => (
              <li
                key={index}
                onClick={() => handleAnswer(choice)}
                className={selected === choice ? "selected" : ""}
              >
                {choice}
              </li>
            ))}
          </ul>
          {selected && <button onClick={nextQuestion}>Next</button>}
        </div>
      )}
    </div>
  );
}

export default App;
