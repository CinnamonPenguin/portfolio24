import React, { useState, useEffect } from "react";
import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";
import "../../../Styles/Funhouse/Binding/Binding.css";

function Binding() {
    const [gameState, setGameState] = useState("start"); // 'start', 'playing', 'gameover'
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

    // Check screen size on resize
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1200);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const startNewGame = () => {
        setGameState("playing");
    };

    const gameOver = () => {
        setGameState("gameover");
    };

    return (
        <div className="binding-container">
            {gameState === "start" && <StartScreen onStart={startNewGame} />}
            {isDesktop && gameState === "playing" && <GameScreen onGameOver={gameOver} />}
            {gameState === "gameover" && <GameOverScreen onRestart={startNewGame} />}
            {!isDesktop && <p>Game only available on desktop view.</p>}
        </div>
    );
}

export default Binding;
