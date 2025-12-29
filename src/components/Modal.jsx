import React from 'react';

const Modal = ({ isCorrect, correctCountry, details, year, sourceUrl, onNext }) => {
    return (
        <div className="modal-overlay">
            <div className={`modal-content ${isCorrect ? 'correct' : 'wrong'}`}>
                <h2 className="feedback-header">
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                </h2>
                <p><strong>Correct Answer:</strong> {correctCountry}</p>
                <div style={{ margin: '1rem 0', lineHeight: '1.6' }}>
                    {details}
                </div>
                {year && <p style={{ fontSize: '0.9em', color: '#8b949e' }}>Year: {year}</p>}
                {sourceUrl && (
                    <p>
                        <a href={sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#58a6ff' }}>
                            Learn more
                        </a>
                    </p>
                )}
                <button className="next-btn" onClick={onNext}>
                    Next Question
                </button>
            </div>
        </div>
    );
};

export default Modal;
