import { Trivia } from './types';

const mockData: { response_code: number; results: Trivia[] } = {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "Geography",
      "question": "Where is the fast food chain &quot;Panda Express&quot; headquartered?",
      "correct_answer": "Rosemead, California",
      "incorrect_answers": [
        "Sacramento, California",
        "Fresno, California",
        "San Diego, California"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Mythology",
      "question": "Which of these mythological creatures is said to be half-man and half-horse?",
      "correct_answer": "Centaur",
      "incorrect_answers": [
        "Minotaur",
        "Pegasus",
        "Gorgon"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Science and Nature",
      "question": "An average human can go two weeks without water.",
      "correct_answer": "False",
      "incorrect_answers": [
        "True"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science and Nature",
      "question": "How many chromosomes are in your body cells?",
      "correct_answer": "23",
      "incorrect_answers": [
        "21",
        "22",
        "24"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Celebrities",
      "question": "How old was Muhammad Ali when he died?",
      "correct_answer": "74",
      "incorrect_answers": [
        "61",
        "He&#039;s still alive",
        "56"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "medium",
      "category": "Entertainment: Video Games",
      "question": "In the game &quot;Subnautica&quot;, a &quot;Cave Crawler&quot; will attack you.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "hard",
      "category": "Vehicles",
      "question": "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Entertainment: Music",
      "question": "The song &quot;Twin Size Mattress&quot; was written by which band?",
      "correct_answer": "The Front Bottoms",
      "incorrect_answers": [
        "Twenty One Pilots",
        "The Wonder Years",
        "The Smith Street Band"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Entertainment: Video Games",
      "question": "In Dota 2, what is Earthshaker&#039;s real name?",
      "correct_answer": "Raigor Stonehoof",
      "incorrect_answers": [
        "Banehallow Ambry",
        "Carl",
        "Barathrum"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "Geography",
      "question": "What North American tourist attraction is served by the &quot;Maid of the Mist&quot; tour company?",
      "correct_answer": "Niagara Falls",
      "incorrect_answers": [
        "Whistler, British Columbia",
        "Disney World",
        "Yosemite National Park"
      ]
    }
  ]
}

export default {
  list: async (): Promise<Trivia[]> => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10');
      if (response.status === 429) {
        console.warn('Error 429: Too many requests. Returning mock data.');
        return mockData.results;
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      return mockData.results; // Devuelve mockData en caso de error
    }
  },
};
