import * as React from "react";

import logo from "../assets/logo.png";

import styles from "./App.module.scss";
import Button from "./components/button";
import TriviaQuestionCard from "./components/triviaQuestion";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <section className={styles.container}>

      <TriviaQuestionCard header="2/10" footer="Historia - Facil">
        trivia
      </TriviaQuestionCard>
      
      <nav className={styles.response}>
      <Button>Holis</Button>
      <Button>Holis</Button>
      <Button>Holis</Button>
      <Button>Holis</Button>

      </nav>
      </section>
    </main>
  );
};

export default App;
