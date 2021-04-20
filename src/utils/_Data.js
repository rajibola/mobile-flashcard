import { color } from 'react-native-reanimated';
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
    backgroundColor: colors.red,
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
    backgroundColor: colors.blue,
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
    backgroundColor: colors.yellow,
  },
};

export const addDeckData = {
  iconsConfig: { name: 'circle', size: wp(45) },
  cards: [
    {
      color: colors.red,
      setCardColor: colors.red,
    },
    {
      color: colors.blue,
      setCardColor: colors.blue,
    },
    {
      color: colors.yellow,
      setCardColor: colors.yellow,
    },
  ],
};

export const circleData = [
  {
    size: 30,
    position: { left: wp(20), top: wp(20) },
  },
  {
    size: 200,
    position: { right: -wp(80), top: -wp(80) },
  },
  {
    size: 20,
    position: { left: wp(40), bottom: wp(70) },
  },
  {
    size: 60,
    position: { right: wp(39), bottom: wp(20) },
  },
];
