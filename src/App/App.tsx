import * as React from "react";
import styles from "./App.module.scss";
import Button from "./components/button";
import TriviaQuestionCard from "./components/triviaQuestion";
import api from './api';
import { Trivia } from './types' 


const App: React.FC = () => {
  const [trivias, setTrivias] = React.useState<Trivia[]>([]);
  const [currentTrivia, setCurrentTrivia] = React.useState<number>(0);
  const [points ,setPoints] = React.useState<number>(0);
  const [state, setState] = React.useState<'pending' | 'solved' | 'done'>('pending');
  const trivia = trivias[currentTrivia];

  function onResponse(text : string) {

    if(text === trivia.correct_answer) {

      switch(trivia.type) {
        case 'multiple':
          setPoints(points + 10);
          break;
        case 'boolean':
          setPoints(points + 5);
          break;
      }
    }

    if(currentTrivia + 1 === trivias.length) {
      setState('done');
    } else {
      setCurrentTrivia((trivia) => trivia + 1);
  }}

  React.useEffect(() => {

    api.list().then((trivias) => {
      setTrivias(trivias);
      setState('solved');
    })
  }, [])
  if(state === 'pending') {
    return <span>Loading... </span>
  }

  if(state === 'done') {
    return <span>Game Over! You scored {points} points</span>
  }

  return (
    <main className={styles.container}>
      <section className={styles.container}>

      <TriviaQuestionCard header= {`${currentTrivia + 1} / ${trivias.length}`}
      footer= {`${trivia.category} - ${trivia.difficulty}`} >
        {trivia.question}
      </TriviaQuestionCard>

      <nav className={styles.response}>
      {[...trivia.incorrect_answers, trivia.correct_answer].sort((a, b) => a.localeCompare(b)).map((response) => (
       <Button onClick={() => onResponse(response)} key={response}>{response}</Button>
      ))}
       </nav>
      </section>
    </main>
  );
};

export default App;
