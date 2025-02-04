import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface GameOverPageProps {
  // El tipo para los puntos será opcional porque lo tomamos del estado de navegación
  points?: number;
}

const GameOverPage: React.FC<GameOverPageProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Acceder a los puntos desde el state de la ubicación
  const points = location.state?.points || 0; // Si no hay puntos, se muestra 0 por defecto

  return (
    <div>
      <h2>Game Over! You scored {points} points</h2>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default GameOverPage;
