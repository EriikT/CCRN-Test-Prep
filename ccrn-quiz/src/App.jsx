import { useState, useRef, useEffect } from "react";
import "./App.css";
import questions from "./data/questions";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const resultRef = useRef(null);

  useEffect(() => {
  if (selectedAnswer !== null) {
    resultRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}, [selectedAnswer]);

  const startQuiz = (amount) => {
    let selectedQuestions;

    if (amount === "all") {
      selectedQuestions = [...questions];
    } else {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      selectedQuestions = shuffled.slice(0, amount);
    }

    setQuizQuestions(selectedQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);

    if (answer === quizQuestions[currentQuestion].correctAnswer) {
      setScore((currentScore) => currentScore + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion === quizQuestions.length - 1) {
      setQuizFinished(true);
      return;
    }

    setCurrentQuestion((current) => current + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const returnHome = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setQuizQuestions([]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
  };

  if (!quizStarted) {
    return (
      <div className="app">
        <div className="quiz-container start-screen">
          <h1>CCRN Practice</h1>

          <img
            src="/ecg/spheal.png"
            alt="Cute Pokemon"
            className="pokemon-image"
          />

          <p className="start-description">
            "Choose how many questions you want to practice"
          </p>

          <div className="quiz-options">
            <button onClick={() => startQuiz(10)}>
              10 Questions
            </button>

            <button onClick={() => startQuiz(25)}>
              25 Questions
            </button>

            <button onClick={() => startQuiz(50)}>
              50 Questions
            </button>

            <button onClick={() => startQuiz("all")}>
              All {questions.length} Questions
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    const percentage = Math.round(
      (score / quizQuestions.length) * 100
    );

    return (
      <div className="app">
        <div className="quiz-container results-screen">
          <h1>Quiz Complete</h1>

          <div className="final-score">
            {score} / {quizQuestions.length}
          </div>

          <p className="percentage">
            You scored {percentage}%
          </p>

          <button
            className="retake-button"
            onClick={() => startQuiz(quizQuestions.length)}
          >
            Take Another Quiz
          </button>

          <button
            className="home-button"
            onClick={returnHome}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="app">
      <div className="quiz-container">
        <h1>CCRN Practice</h1>

        <div className="progress">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </div>

        <h2>{question.question}</h2>

        {question.clinicalData && (
          <div className="clinical-data">
            {question.clinicalData.map((item, index) => (
              <div key={index}>
                {item}
              </div>
            ))}
          </div>
        )}

        {question.followUp && (
          <p className="follow-up">
            {question.followUp}
          </p>
        )}

        {question.image && (
          <div className="question-image-container">
            <img
              src={question.image}
              alt={`ECG rhythm for question ${question.id}`}
              className="question-image"
            />
          </div>
        )}

        <div className="answers">
          {question.answers.map((answer, index) => {
            const letter = String.fromCharCode(65 + index);

            let buttonClass = "answer-button";

            if (selectedAnswer !== null) {
              if (letter === question.correctAnswer) {
                buttonClass += " correct-answer";
              } else if (letter === selectedAnswer) {
                buttonClass += " incorrect-answer";
              }
            }

            return (
              <button
                key={letter}
                className={buttonClass}
                onClick={() => handleAnswer(letter)}
                disabled={selectedAnswer !== null}
              >
                <span>{letter}.</span>
                {answer}
              </button>
            );
          })}
        </div>

        {selectedAnswer !== null && (
          <>
            <div className="result" ref={resultRef}>
              {selectedAnswer === question.correctAnswer ? (
                <p className="correct">
                  ✓ Correct!
                </p>
              ) : (
                <p className="incorrect">
                  ✕ Incorrect
                </p>
              )}
            </div>

            {question.explanation && (
              <>
                <button
                  className="explanation-button"
                  onClick={() => setShowExplanation((current) => !current)}
                >
                  {showExplanation ? "Hide Explanation" : "View Explanation"}
                </button>

                {showExplanation && (
                  <div className="explanation">
                    <h3>Explanation</h3>
                    <p>{question.explanation}</p>
                  </div>
                )}
              </>
            )}

            <button
              className="next-button"
              onClick={handleNext}
            >
              {currentQuestion === quizQuestions.length - 1
                ? "See Results →"
                : "Next Question →"}
            </button>
          </>
        )}

        <div className="score">
          Score: {score}
        </div>
      </div>
    </div>
  );
}

export default App;