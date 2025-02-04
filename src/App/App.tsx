import React from "react";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/HomePage"; // Página de inicio
import TriviaGamePage from "./pages/TriviaGamePage"; // Página del juego
import GameOverPage from "./pages/GameOverPage"; // Página de finalización del juego

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/game" element={<TriviaGamePage />} />
      <Route path="/game-over" element={<GameOverPage />} />
    </Routes>
  );
};

export default App;
