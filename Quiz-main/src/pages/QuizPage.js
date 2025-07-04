import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function QuizPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(15);
  const [optionClicked, setOptionClicked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=7&category=${categoryId}&type=multiple`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.results.map((q) => {
          const options = [...q.incorrect_answers];
          const correctIndex = Math.floor(Math.random() * 4);
          options.splice(correctIndex, 0, q.correct_answer);
          return {
            question: q.question,
            options,
            correctAnswerIndex: correctIndex,
            correctAnswer: q.correct_answer,
          };
        });
        setQuestions(formatted);
        setSelectedAnswers(Array(formatted.length).fill(null));
        setShowScore(false);
        setCurrentQuestion(0);
        setTimer(15);
        setOptionClicked(false);
      });
  }, [categoryId]);

  useEffect(() => {
    if (!showScore && questions.length > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            handleNext();
            return 15;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentQuestion, showScore, questions]);

  const handleOptionClick = (index) => {
    if (optionClicked) return;
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = index;
    setSelectedAnswers(updatedAnswers);
    setOptionClicked(true);
  };

  const handleNext = () => {
    setOptionClicked(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(15);
    } else {
      setShowScore(true);
    }
  };

  const getScore = () => {
    return selectedAnswers.reduce((acc, answer, idx) => {
      return answer === questions[idx].correctAnswerIndex ? acc + 1 : acc;
    }, 0);
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "#1a1a2e" : "#e0f7fa",
        color: darkMode ? "#ffffff" : "#000000",
        padding: "2rem",
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      <div style={{ textAlign: "right" }}>
        <button
          onClick={toggleMode}
          style={{
            marginBottom: "1rem",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "6px",
            backgroundColor: darkMode ? "#00adb5" : "#00796b",
            color: "white",
            cursor: "pointer"
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : showScore ? (
        <div style={{ textAlign: "center" }}>
          <h2>Your Score: {getScore()} / {questions.length}</h2>
          <h3>Correct Answers:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {questions.map((q, idx) => (
              <li key={idx} style={{ margin: "1rem 0" }}>
                <div dangerouslySetInnerHTML={{ __html: `Q${idx + 1}: ${q.question}` }} />
                <strong style={{ color: "green" }}>✔️ {q.correctAnswer}</strong>
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: "2rem",
              padding: "0.7rem 2rem",
              backgroundColor: "#5f0f40",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Back to Home
          </button>
        </div>
      ) : (
        <div style={{ maxWidth: "700px", margin: "auto" }}>
          <h3>Question {currentQuestion + 1} of {questions.length}</h3>
          <p dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }} />
          {questions[currentQuestion].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(idx)}
              style={{
                display: "block",
                margin: "1rem 0",
                padding: "0.8rem",
                borderRadius: "8px",
                backgroundColor:
                  selectedAnswers[currentQuestion] === idx
                    ? "#ff5722"
                    : darkMode
                    ? "#2e2e3a"
                    : "#fff",
                color: darkMode ? "#ffffff" : "#000000",
                border: "1px solid #ccc",
                width: "100%",
                cursor: optionClicked ? "not-allowed" : "pointer",
                opacity: optionClicked ? 0.6 : 1,
                fontFamily: "'Poppins', sans-serif"
              }}
              dangerouslySetInnerHTML={{ __html: opt }}
            />
          ))}
          <p><strong>Time left: {timer}s</strong></p>
          <button
            onClick={handleNext}
            style={{
              padding: "0.5rem 1.5rem",
              backgroundColor: darkMode ? "#393e46" : "#00796b",
              color: "white",
              border: "none",
              borderRadius: "5px"
            }}
          >
            {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
