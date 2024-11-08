import React from "react";

const GameOverScreen = ({ onRestart }) => {
    return (
        <div className="gameover-screen">
            <h1>Game Over</h1>
            <button onClick={onRestart}>Restart Game</button>
        </div>
    );
};

export default GameOverScreen;
