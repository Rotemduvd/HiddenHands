import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import SummaryScreen from './components/SummaryScreen';

function App() {
  const [gameState, setGameState] = useState('welcome'); // welcome, quiz, summary
  const [finalScore, setFinalScore] = useState(0);
  const [sessionId, setSessionId] = useState(0);

  const startQuiz = () => {
    setGameState('quiz');
    setSessionId(prev => prev + 1);
  };

  const finishQuiz = (score) => {
    setFinalScore(score);
    setGameState('summary');
  };

  const restartQuiz = () => {
    setGameState('quiz');
    setSessionId(prev => prev + 1);
  };

  return (
    <div className="app-container">
      {gameState === 'welcome' && <WelcomeScreen onStart={startQuiz} />}
      {gameState === 'quiz' && (
        <QuizScreen
          key={sessionId}
          onComplete={finishQuiz}
        />
      )}
      {gameState === 'summary' && (
        <SummaryScreen
          score={finalScore}
          totalQuestions={5}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
