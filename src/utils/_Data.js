import { colors } from '../constants';

export const Decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
    backgroundColor: colors.redOpacity,
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
    backgroundColor: colors.blueOpacity,
  },

  React_Native: {
    title: 'React Native',
    questions: [
      {
        question: 'What is React Native?',
        answer: 'React native is used to develop App for both mobile platform',
      },
    ],
    backgroundColor: colors.yellowOpacity,
  },
};
