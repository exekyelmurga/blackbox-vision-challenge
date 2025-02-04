import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import TriviaQuestionCard from "../components/TriviaQuestion"; // Suponiendo que este es tu componente de preguntas
import Button from "../components/button"; // Tu componente de botón
import LoadingPage from "../components/LoadingPage"; // Tu componente de cargando
import api from "../api"; // Para obtener las preguntas de trivia
import { Trivia } from "../types";

const TriviaGamePage: React.FC = () => {
  const navigate = useNavigate();
  const [trivias, setTrivias] = useState<Trivia[]>([]);
  const [currentTrivia, setCurrentTrivia] = useState(0);
  const [points, setPoints] = useState(0);

  // Cargar preguntas de trivia al inicio
  useEffect(() => {
    api.list().then((trivias) => {
      setTrivias(trivias);
    });
  }, []);

  const trivia = trivias[currentTrivia];

  const sortedResponses = useMemo(
    () =>
      trivia
        ? [...trivia.incorrect_answers, trivia.correct_answer].sort((a, b) =>
            a.localeCompare(b)
          )
        : [],
    [trivia]
  );

  // Función para manejar la respuesta seleccionada
  function onResponse(text: string) {
    if (trivia && text === trivia.correct_answer) {
      setPoints((prevPoints) =>
        trivia.type === "multiple" ? prevPoints + 10 : prevPoints + 5
      );
    }

    // Actualizar la trivia actual
    setCurrentTrivia((prev) => {
      const nextTrivia = prev + 1;
      if (nextTrivia === trivias.length) {
        // Redirigir a la página de game over al final del juego
        navigate("/game-over", { state: { points } });
      }
      return nextTrivia;
    });
  }

  // Función para decodificar las entidades HTML
  const decodeHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  if (trivias.length === 0 || trivia === undefined) {
    return <LoadingPage />;
  }

  return (
    <main>
      <h1>Trivia Game</h1>
      <TriviaQuestionCard
        header={`${currentTrivia + 1} / ${trivias.length}`}
        footer={`${trivia.category} - ${trivia.difficulty}`}
      >
        {/* Decodificando la pregunta */}
        {decodeHTML(trivia.question)}
      </TriviaQuestionCard>

      <nav>
        {sortedResponses.map((response) => (
          <Button onClick={() => onResponse(response)} key={response}>
            {decodeHTML(response)} {/* Decodificando las respuestas */}
          </Button>
        ))}
      </nav>
    </main>
  );
};

export default TriviaGamePage;
