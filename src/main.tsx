import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingPage from "./App/components/LoadingPage";
import GameOverPage from "./App/components/GameOverPage";
import MainGame from "./App/App"; // Este será el componente principal del juego

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainGame />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/game-over" element={<GameOverPage />} />
      </Routes>
    </Router>
  );
};

export default App;
