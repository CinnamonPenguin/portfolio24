import React from "react";

const StartScreen = ({ onStart }) => {
    return (
        <div className="start-screen">
            <h1>Welcome to the Funhouse Game!</h1>
            <button onClick={onStart}>Start Game</button>
        </div>
    );
};

export default StartScreen;
