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
  'سؤال وجواب': {
    title: 'سؤال وجواب',
    subtitle: 'من المتخصصين في اللغة',
    questions: [
      {
        question: 'الحب',
        answer: 'Love❤️',
      },
    ],
    backgroundColor: colors.blue,
  },

  学中文: {
    title: '学中文',
    subtitle: '来自母语人士',
    questions: [
      {
        question: '爱',
        answer: 'Love❤️',
      },
    ],
    backgroundColor: colors.yellow,
  },

  'प्रश्न और उत्तर': {
    title: 'प्रश्न और उत्तर',
    subtitle: 'देशी वक्ता से',
    questions: [
      {
        question: 'माही माही',
        answer: 'Love❤️',
      },
    ],
    backgroundColor: colors.blue,
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
