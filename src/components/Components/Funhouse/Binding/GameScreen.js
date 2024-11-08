import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect } from "react-konva";
import Matter from "matter-js";

const LEVEL_WIDTH = 2400; // Width of the level (double the screen width)
const SCREEN_WIDTH = 1200; // Width of the game screen
const SCREEN_HEIGHT = 800;

const GameScreen = ({ onGameOver }) => {
    const engine = useRef(Matter.Engine.create());
    const playerRef = useRef(null);
    const floorRef = useRef(null);
    const [playerPosition, setPlayerPosition] = useState({ x: 100, y: 300 });
    const [cameraOffset, setCameraOffset] = useState(0);

    useEffect(() => {
        const { world } = engine.current;

        // Set gravity
        engine.current.gravity.y = 1;

        // Create player
        const player = Matter.Bodies.rectangle(100, 600, 50, 50, { inertia: Infinity });
        Matter.World.add(world, player);
        playerRef.current = player;

        // Create floor
        const floor = Matter.Bodies.rectangle(LEVEL_WIDTH / 2, 750, LEVEL_WIDTH, 20, { isStatic: true });
        Matter.World.add(world, floor);
        floorRef.current = floor;

        // Game loop
        const gameLoop = () => {
            Matter.Engine.update(engine.current);
            setPlayerPosition({ x: player.position.x, y: player.position.y });

            // Camera logic: Move camera if player goes beyond half the screen width
            if (player.position.x > SCREEN_WIDTH / 2 && player.position.x < LEVEL_WIDTH - SCREEN_WIDTH / 2) {
                setCameraOffset(player.position.x - SCREEN_WIDTH / 2);
            }

            requestAnimationFrame(gameLoop);
        };
        gameLoop();

        // Keyboard controls
        const handleKeyDown = (e) => {
            const { x, y } = player.velocity;
            if (e.key === "ArrowLeft") {
                if (player.position.x > 25) { // Left border check
                    Matter.Body.setVelocity(player, { x: -5, y });
                }
            } else if (e.key === "ArrowRight") {
                Matter.Body.setVelocity(player, { x: 5, y });
            } else if (e.key === "ArrowUp" && Math.abs(y) < 1) { // Jump
                Matter.Body.setVelocity(player, { x, y: -12 });
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            Matter.Engine.clear(engine.current); // Cleanup
        };
    }, [onGameOver]);

    return (
        <div className="game-container">
            <Stage width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
                <Layer offsetX={-cameraOffset}>
                    {/* Player */}
                    <Rect
                        x={playerPosition.x - 25} // Center the rectangle on the player body
                        y={playerPosition.y - 25}
                        width={50}
                        height={50}
                        fill="blue"
                    />

                    {/* Floor */}
                    <Rect
                        x={floorRef.current?.position.x - LEVEL_WIDTH / 2}
                        y={floorRef.current?.position.y - 10}
                        width={LEVEL_WIDTH}
                        height={20}
                        fill="green"
                    />

                    {/* Obstacles in the level */}
                    <Rect x={800} y={700} width={100} height={50} fill="brown" />
                    <Rect x={1500} y={700} width={100} height={50} fill="brown" />
                    <Rect x={2000} y={700} width={100} height={50} fill="brown" />
                </Layer>
            </Stage>
        </div>
    );
};

export default GameScreen;
