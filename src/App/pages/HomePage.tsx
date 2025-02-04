import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      <h1>Welcome to the Trivia Game!</h1>
      <button onClick={() => navigate("/game")}>Start Game</button>
    </div>
  );
};

export default HomePage;
