import React from 'react';

const WelcomeScreen = ({ onStart }) => {
    return (
        <div className="card">
            <h1 className="title">Hidden Hands</h1>
            <p className="intro-text">
                How much do you know about AI used against civilians?
            </p>
            <p style={{ marginBottom: '3rem', color: 'var(--text-secondary)', fontFamily: 'Orbitron', letterSpacing: '1px' }}>
                Identify the country behind the AI controversy.
            </p>
            <button className="primary-btn" onClick={onStart}>
                Start Quiz
            </button>
        </div>
    );
};

export default WelcomeScreen;
