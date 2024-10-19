import React, { useState, useEffect, useRef } from 'react';
import './ChordQuiz.css'; // Import CSS for styling

const CHORDS = [
    { type: 'Major', audio: 'chords/M1.mp3' },
    { type: 'Major', audio: 'chords/M2.mp3' },
    { type: 'Major', audio: 'chords/M3.mp3' },
    { type: 'Major', audio: 'chords/M4.mp3' },
    { type: 'Minor', audio: 'chords/minor1.mp3' },
    { type: 'Minor', audio: 'chords/minor2.mp3' },
    { type: 'Minor', audio: 'chords/minor3.mp3' },
    { type: 'Minor', audio: 'chords/minor4.mp3' },
    { type: 'Diminished', audio: 'chords/diminished1.mp3' },
    { type: 'Diminished', audio: 'chords/diminished2.mp3' },
    { type: 'Diminished', audio: 'chords/diminished3.mp3' },
    { type: 'Diminished', audio: 'chords/diminished4.mp3' },
    { type: 'Sus2', audio: 'chords/sus1.mp3' },
    { type: 'Sus4', audio: 'chords/sus2.mp3' },
];

const ChordQuiz = () => {
    const [currentChord, setCurrentChord] = useState(null);
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState('');
    const [correct, setCorrect] = useState(null);
    const audioRef = useRef(null); // Reference for the audio element

    useEffect(() => {
        loadNewChord();
    }, []);

    const loadNewChord = () => {
        const randomChord = CHORDS[Math.floor(Math.random() * CHORDS.length)];
        setCurrentChord(randomChord);
        playAudio(randomChord.audio);
        setSelected('');
        setCorrect(null);
        setOptions(shuffleArray(generateOptions(randomChord.type)));
    };

    const playAudio = (audio) => {
        // Stop the currently playing audio if it exists
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset to start
        }

        audioRef.current = new Audio(audio);
        audioRef.current.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    };

    const handleAnswer = (answer) => {
        setSelected(answer);
        setCorrect(answer === currentChord.type);
    };

    const generateOptions = (correctAnswer) => {
        const uniqueOptions = new Set([correctAnswer]);

        while (uniqueOptions.size < 3) {
            const randomChord = CHORDS[Math.floor(Math.random() * CHORDS.length)];
            uniqueOptions.add(randomChord.type);
        }

        return Array.from(uniqueOptions);
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const renderOptions = () => {
        return options.map((chordType, index) => (
            <button
                key={index}
                onClick={() => handleAnswer(chordType)}
                disabled={selected !== ''}
                className={`option-button ${selected === chordType ? (correct ? 'correct' : 'incorrect') : ''}`}
            >
                {chordType}
            </button>
        ));
    };

    const renderResult = () => {
        if (correct === null) return null;
        return (
            <div className="result">
                {correct ? 'Correct!' : `Wrong! The correct answer was ${currentChord.type}.`}
                <button onClick={loadNewChord} className="next-button">Next Chord</button>
            </div>
        );
    };

    return (
        <div className="quiz-container">
            <h1>Chord Quiz</h1>
            <p>Listen to the chord and select whether it is Major, Minor, Diminished, or Suspended:</p>
            <button onClick={() => playAudio(currentChord.audio)} className="play-button">Play Chord</button>
            <div className="options-container">{renderOptions()}</div>
            {renderResult()}
        </div>
    );
};

export default ChordQuiz;
