import React from 'react';

const SummaryScreen = ({ score, totalQuestions, onRestart }) => {
    const percentage = (score / (totalQuestions * 20)) * 100;

    let feedback = "";
    if (percentage <= 20) {
        feedback = "You should be more aware of how these tools are used against civilians.";
    } else if (percentage <= 60) {
        feedback = "Decent awareness - but there's more to learn about algorithmic harm.";
    } else {
        feedback = "Strong awareness - you recognized most of these critical cases.";
    }

    return (
        <div className="card">
            <h1 className="title">Quiz Completed</h1>
            <div className="score-display">
                {score} <span style={{ fontSize: '0.4em', color: 'var(--text-secondary)' }}>/ 100</span>
            </div>
            <p className="feedback-text">
                {feedback}
            </p>
            <button className="primary-btn" onClick={onRestart}>
                Play Again
            </button>
        </div>
    );
};

export default SummaryScreen;
