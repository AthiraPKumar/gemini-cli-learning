import React, { useState } from 'react';
import { quizData, Question } from './data/quiz_data';
import './App.css';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion: Question = quizData[currentQuestionIndex];

  const handleOptionClick = (index: number) => {
    if (showFeedback) return;
    setSelectedOption(index);
    setShowFeedback(true);
    if (index === currentQuestion.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quizData.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
  };

  const progress = ((currentQuestionIndex) / quizData.length) * 100;

  if (isFinished) {
    return (
      <div className="quiz-container">
        <h1>Quiz Finished!</h1>
        <p>Your score: {score} out of {quizData.length}</p>
        <p>Percentage: {((score / quizData.length) * 100).toFixed(1)}%</p>
        <button className="restart-button" onClick={handleRestart}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="question-topic">Chapter {currentQuestion.chapter}: {currentQuestion.topic}</div>
      <div className="question-text">{currentQuestion.question}</div>
      
      <div className="options-list">
        {currentQuestion.options.map((option, index) => {
          let className = "option-button";
          if (showFeedback) {
            if (index === currentQuestion.correctIndex) className += " correct";
            else if (index === selectedOption) className += " incorrect";
          }
          return (
            <button
              key={index}
              className={className}
              onClick={() => handleOptionClick(index)}
              disabled={showFeedback}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className="feedback-container">
          <div className={`feedback-status ${selectedOption === currentQuestion.correctIndex ? 'correct' : 'incorrect'}`}>
            {selectedOption === currentQuestion.correctIndex ? 'Correct!' : 'Incorrect'}
          </div>
          <div className="explanation">
            {currentQuestion.explanation}
          </div>
          <button className="next-button" onClick={handleNext}>
            {currentQuestionIndex === quizData.length - 1 ? 'Finish' : 'Next Question'}
          </button>
        </div>
      )}
      
      <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#888' }}>
        Question {currentQuestionIndex + 1} of {quizData.length}
      </div>
    </div>
  );
};

export default App;
