import React, { useState, useEffect } from 'react';
import { cases } from '../data/cases';
import { countries } from '../data/countries';
import Modal from './Modal';

// Fisher-Yates shuffle
const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const QuizScreen = ({ onComplete }) => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showModal, setShowModal] = useState(false);

    // Initialize session
    useEffect(() => {
        const shuffledCases = shuffle(cases);
        const selected = shuffledCases.slice(0, 5);
        setQuestions(selected);
        setCurrentIndex(0);
        setScore(0);
    }, []);

    // Generate options when current question changes
    useEffect(() => {
        if (questions.length > 0 && currentIndex < questions.length) {
            const currentCase = questions[currentIndex];
            // Filter out correct country from pool, shuffle, take 3
            const pool = countries.filter(c => c !== currentCase.correctCountry);
            const decoys = shuffle(pool).slice(0, 3);

            // Combine with correct answer and shuffle
            const newOptions = shuffle([...decoys, currentCase.correctCountry]);

            setOptions(newOptions);
            setIsAnswered(false);
            setSelectedOption(null);
            setShowModal(false);
        }
    }, [questions, currentIndex]);

    const handleOptionClick = (option) => {
        if (isAnswered) return;

        setSelectedOption(option);
        setIsAnswered(true);

        const isCorrect = option === questions[currentIndex].correctCountry;
        if (isCorrect) {
            setScore(prev => prev + 20);
        }

        // Show modal immediately
        setShowModal(true);
    };

    const handleNext = () => {
        if (currentIndex < 4) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // Game over
            onComplete(score);
        }
    };

    if (questions.length === 0) return <div>Loading...</div>;

    const currentCase = questions[currentIndex];

    return (
        <div className="card">
            <div className="progress-container">
                <div className="progress-fill" style={{ width: `${((currentIndex + 1) / 5) * 100}%` }}></div>
                <div className="progress-text">CASE {currentIndex + 1} / 5</div>
            </div>

            <div className="teaser-text">
                {currentCase.teaser}
            </div>

            <div className="options-grid">
                {options.map((option, idx) => {
                    let className = "option-btn";
                    if (isAnswered) {
                        if (option === currentCase.correctCountry) className += " correct";
                        else if (option === selectedOption) className += " wrong";
                        // Optional: Disable other buttons or dim them?
                        // CSS handles :disabled opacity
                    }

                    return (
                        <button
                            key={idx}
                            className={className}
                            onClick={() => handleOptionClick(option)}
                            disabled={isAnswered}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>

            <div style={{ marginTop: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Score: {score}
            </div>

            {showModal && (
                <Modal
                    isCorrect={selectedOption === currentCase.correctCountry}
                    correctCountry={currentCase.correctCountry}
                    details={currentCase.details}
                    year={currentCase.year}
                    sourceUrl={currentCase.sourceUrl}
                    onNext={handleNext}
                />
            )}
        </div>
    );
};

export default QuizScreen;
