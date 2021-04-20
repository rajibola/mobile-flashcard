import { RECEIVE_DECKS, ADD_CARD, REMOVE_DECK, ADD_DECK } from './actions';

export const DeckReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      const { title, subtitle, backgroundColor } = action;
      return {
        ...state,
        [title]: {
          title,
          subtitle,
          questions: [],
          backgroundColor,
        },
      };
    case REMOVE_DECK:
      const { id } = action;
      const { [id]: value, ...remainingDecks } = state;
      console.log(remainingDecks);
      return remainingDecks;

    case ADD_CARD:
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: [...state[deckId].questions].concat(card),
        },
      };
    default:
      return state;
  }
};
