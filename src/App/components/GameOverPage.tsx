import React from "react";
import { useLocation } from "react-router-dom";

const GameOverPage: React.FC = () => {
  const location = useLocation();
  const points = location.state?.points || 0; // Obtener los puntos pasados en la navegación

  return <span>Game Over! You scored {points} points</span>;
};

export default GameOverPage;
