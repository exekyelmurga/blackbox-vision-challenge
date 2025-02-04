import * as React  from 'react';
import styles from './triviaQestion.module.scss';

interface Props {
    header: string;
    footer: string;
} 

const TriviaQuestionCard: React.FC<Props> = ({header, children, footer}) => {
    return <div className={styles.container}>
        <header>{header}</header>
        <section>{children}</section>
        <footer>{footer}</footer>
        </div>
    }

export default TriviaQuestionCard;