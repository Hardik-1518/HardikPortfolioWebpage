import React, { useState, useEffect, useRef } from 'react';

const GRID_SIZE = 20;
const CELL_COUNT = 20; // 20x20 grid

const SnakeGame = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }, { x: 10, y: 11 }, { x: 10, y: 12 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState({ x: 0, y: -1 }); // Initial direction: UP
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('snake_highscore') || '0', 10);
  });
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [speed, setSpeed] = useState(110); // Game tick speed in ms

  // Keep direction ref to avoid state stale closure issues inside game loop
  const dirRef = useRef(direction);
  dirRef.current = direction;

  // Handle key listeners for game play
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'KeyW'].includes(e.code) && dirRef.current.y === 0) {
        setDirection({ x: 0, y: -1 });
      } else if (['ArrowDown', 'KeyS'].includes(e.code) && dirRef.current.y === 0) {
        setDirection({ x: 0, y: 1 });
      } else if (['ArrowLeft', 'KeyA'].includes(e.code) && dirRef.current.x === 0) {
        setDirection({ x: -1, y: 0 });
      } else if (['ArrowRight', 'KeyD'].includes(e.code) && dirRef.current.x === 0) {
        setDirection({ x: 1, y: 0 });
      } else if (e.code === 'Space') {
        e.preventDefault();
        setIsPaused((p) => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Main game loop
  useEffect(() => {
    if (isPaused || gameOver || !isOpen) return;

    const gameInterval = setInterval(() => {
      moveSnake();
    }, speed);

    return () => clearInterval(gameInterval);
  }, [snake, direction, isPaused, gameOver, speed, isOpen]);

  // Render on canvas whenever snake, food, or game state updates
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Clear Canvas
    ctx.fillStyle = '#0f172a'; // Deep slate
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Grid Lines (Subtle)
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= CELL_COUNT; i++) {
      ctx.beginPath();
      ctx.moveTo(i * GRID_SIZE, 0);
      ctx.lineTo(i * GRID_SIZE, canvas.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * GRID_SIZE);
      ctx.lineTo(canvas.width, i * GRID_SIZE);
      ctx.stroke();
    }

    // Draw Food (Glowing Cherry)
    ctx.fillStyle = '#f43f5e'; // Cherry pink
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#f43f5e';
    ctx.beginPath();
    const foodRadius = GRID_SIZE / 2 - 2;
    ctx.arc(
      food.x * GRID_SIZE + GRID_SIZE / 2,
      food.y * GRID_SIZE + GRID_SIZE / 2,
      foodRadius,
      0,
      2 * Math.PI
    );
    ctx.fill();
    ctx.shadowBlur = 0; // Reset shadow

    // Draw Snake
    snake.forEach((part, index) => {
      const isHead = index === 0;
      
      // Gradient color for body
      ctx.fillStyle = isHead ? '#22d3ee' : `rgba(99, 102, 241, ${1 - index / snake.length * 0.6})`;
      
      // Draw rounded rectangle for parts
      ctx.beginPath();
      const padding = 1.5;
      const size = GRID_SIZE - padding * 2;
      const x = part.x * GRID_SIZE + padding;
      const y = part.y * GRID_SIZE + padding;
      
      if (isHead) {
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#22d3ee';
      }
      
      ctx.roundRect ? ctx.roundRect(x, y, size, size, isHead ? 6 : 4) : ctx.rect(x, y, size, size);
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow
    });

  }, [snake, food, gameOver, isOpen]);

  const moveSnake = () => {
    const head = { ...snake[0] };
    const nextHead = {
      x: head.x + direction.x,
      y: head.y + direction.y,
    };

    // Collision check (Wall collision)
    if (
      nextHead.x < 0 ||
      nextHead.x >= CELL_COUNT ||
      nextHead.y < 0 ||
      nextHead.y >= CELL_COUNT
    ) {
      triggerGameOver();
      return;
    }

    // Collision check (Self collision)
    for (let part of snake) {
      if (part.x === nextHead.x && part.y === nextHead.y) {
        triggerGameOver();
        return;
      }
    }

    const newSnake = [nextHead, ...snake];

    // Check if food eaten
    if (nextHead.x === food.x && nextHead.y === food.y) {
      // Keep food in snake body check
      let newFoodPos = generateFoodPosition();
      while (newSnake.some((part) => part.x === newFoodPos.x && part.y === newFoodPos.y)) {
        newFoodPos = generateFoodPosition();
      }
      setFood(newFoodPos);
      
      // Score increase
      const newScore = score + 10;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem('snake_highscore', newScore.toString());
      }

      // Slightly increase game speed
      if (speed > 50) {
        setSpeed((s) => s - 2);
      }
    } else {
      newSnake.pop(); // Remove tail if not eating
    }

    setSnake(newSnake);
  };

  const generateFoodPosition = () => {
    return {
      x: Math.floor(Math.random() * CELL_COUNT),
      y: Math.floor(Math.random() * CELL_COUNT),
    };
  };

  const triggerGameOver = () => {
    setGameOver(true);
  };

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }, { x: 10, y: 11 }, { x: 10, y: 12 }]);
    setFood({ x: 5, y: 5 });
    setDirection({ x: 0, y: -1 });
    setScore(0);
    setSpeed(110);
    setGameOver(false);
    setIsPaused(false);
  };

  const handleMobileNav = (x, y) => {
    if (isPaused || gameOver) return;
    if (x !== 0 && dirRef.current.x === 0) {
      setDirection({ x, y: 0 });
    } else if (y !== 0 && dirRef.current.y === 0) {
      setDirection({ x: 0, y });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="game-modal-backdrop">
      <div className="glass-card game-modal-content">
        <button className="game-modal-close" onClick={onClose} aria-label="Close game">
          &times;
        </button>
        
        <h2 className="game-modal-title">
          <span className="gradient-text">Vintage Snake Game</span>
        </h2>
        
        <div className="game-score-board">
          <div className="score-item">
            <span className="score-label">SCORE</span>
            <span className="score-val">{score}</span>
          </div>
          <div className="score-item">
            <span className="score-label">HI-SCORE</span>
            <span className="score-val">{highScore}</span>
          </div>
        </div>

        <div className="canvas-wrapper">
          <canvas 
            ref={canvasRef} 
            width={400} 
            height={400} 
            className="game-canvas" 
          />
          
          {(isPaused || gameOver) && (
            <div className="canvas-overlay">
              {gameOver ? (
                <>
                  <h3 className="overlay-title error">GAME OVER</h3>
                  <button className="btn btn-primary" onClick={resetGame}>
                    Play Again
                  </button>
                </>
              ) : (
                <>
                  <h3 className="overlay-title">PAUSED</h3>
                  <p className="overlay-sub">Press Space or button to Resume</p>
                  <button className="btn btn-primary" onClick={() => setIsPaused(false)}>
                    Start / Resume
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Mobile controls */}
        <div className="mobile-dpad">
          <div className="dpad-row">
            <button className="dpad-btn up" onClick={() => handleMobileNav(0, -1)}>▲</button>
          </div>
          <div className="dpad-row">
            <button className="dpad-btn left" onClick={() => handleMobileNav(-1, 0)}>◀</button>
            <button className="dpad-btn pause" onClick={() => setIsPaused((p) => !p)}>
              {isPaused ? '▶' : 'Ⅱ'}
            </button>
            <button className="dpad-btn right" onClick={() => handleMobileNav(1, 0)}>▶</button>
          </div>
          <div className="dpad-row">
            <button className="dpad-btn down" onClick={() => handleMobileNav(0, 1)}>▼</button>
          </div>
        </div>

        <div className="game-instructions">
          <p>Desktop: Use <b>WASD</b> or <b>Arrow Keys</b> to steer. <b>Space</b> to pause/resume.</p>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
