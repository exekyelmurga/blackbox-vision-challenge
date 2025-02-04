export interface Trivia {
    type: 'boolean' | 'multiple',
    difficulty: 'easy' | 'medium' | 'hard',
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}