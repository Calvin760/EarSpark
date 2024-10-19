import React from 'react';
import './ProgressCard.css'; // Import your CSS file
import { FaStar, FaCheckCircle, FaClock } from 'react-icons/fa'; // Import icons

const ProgressCard = ({ points, exercisesCompleted, secondsSpent }) => {
    return (
        <div className="progress-card">
            <div className="statistic">
                <FaStar className="icon" />
                <div className="info">
                    <h2>{points}</h2>
                    <p>Points</p>
                </div>
            </div>
            <div className="statistic">
                <FaCheckCircle className="icon" />
                <div className="info">
                    <h2>{exercisesCompleted}</h2>
                    <p>Exercises Completed</p>
                </div>
            </div>
            <div className="statistic">
                <FaClock className="icon" />
                <div className="info">
                    <h2>{secondsSpent} sec</h2>
                    <p>Time Spent</p>
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;
