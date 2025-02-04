import React, { useState, useEffect, useMemo } from "react";
import styles from "./App.module.scss";
import Button from "./components/button";
import TriviaQuestionCard from "./components/TriviaQuestion";
import api from "./api";
import { Trivia } from "./types";

const App: React.FC = () => {
  const [trivias, setTrivias] = useState<Trivia[]>([]);
  const [currentTrivia, setCurrentTrivia] = useState(0);
  const [points, setPoints] = useState(0);
  const [state, setState] = useState<"pending" | "solved" | "done">("pending");

  useEffect(() => {
    api.list()
      .then((trivias) => {
        setTrivias(trivias);
        setState("solved");
      })
      .catch((error) => {
        console.error("Error loading trivia:", error);
        setState("done");
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

  function onResponse(text: string) {
    if (trivia && text === trivia.correct_answer) {
      setPoints((prevPoints) =>
        trivia.type === "multiple" ? prevPoints + 10 : prevPoints + 5
      );
    }

    setCurrentTrivia((prev) => prev + 1);

    if (currentTrivia + 1 === trivias.length) {
      setState("done");
    }
  }

  if (state === "pending") {
    return <span>Loading...</span>;
  }

  if (state === "done") {
    return <span>Game Over! You scored {points} points</span>;
  }

  if (!trivia) {
    return <span>Error: No trivia found</span>;
  }

  return (
    <main className={styles.container}>
      <section className={styles.container}>
        <TriviaQuestionCard
          header={`${currentTrivia + 1} / ${trivias.length}`}
          footer={`${trivia.category} - ${trivia.difficulty}`}
        >
          {trivia.question}
        </TriviaQuestionCard>

        <nav className={styles.response}>
          {sortedResponses.map((response) => (
            <Button onClick={() => onResponse(response)} key={response}>
              {response}
            </Button>
          ))}
        </nav>
      </section>
    </main>
  );
};

export default App;
