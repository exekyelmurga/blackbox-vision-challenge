import { Trivia } from './types';

export default {
    list: (): Promise<Trivia[]> => 
        fetch('https://opentdb.com/api.php?amount=10')
        .then((response) => response.json())
        .then((data) => data.results)
}