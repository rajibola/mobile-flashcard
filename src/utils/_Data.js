import { colors } from '../constants';
import { wp } from './layout';

export const Decks = {
  React: {
    title: 'React',
    subtitle: 'Learn new JS framework',
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
    subtitle: 'Learn new JS framework',
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
    subtitle: 'Learn new JS framework',
    questions: [
      {
        question: 'What is React Native?',
        answer: 'React native is used to develop App for both mobile platform',
      },
    ],
    backgroundColor: colors.yellowOpacity,
  },
};

export const addDeckData = {
  iconsConfig: { name: 'circle', size: wp(45) },
  cards: [
    {
      color: colors.red,
      setCardColor: colors.redOpacity,
    },
    {
      color: colors.blue,
      setCardColor: colors.blueOpacity,
    },
    {
      color: colors.yellow,
      setCardColor: colors.yellowOpacity,
    },
  ],
};
