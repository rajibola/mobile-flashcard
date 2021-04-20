import { useContext } from 'react';
import { getDecks } from '../utils';
import { AppContext } from './context';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function addDeck(title, subtitle, backgroundColor) {
  return {
    type: ADD_DECK,
    title,
    subtitle,
    backgroundColor,
  };
}

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    id,
  };
}

export function addCardToDeck(id, card) {
  return {
    type: ADD_CARD,
    deckId: id,
    card,
  };
}

// export function handleInitialData(dispatch) {
//   return getDecks().then((decks) => {
//     dispatch(receiveDecks(decks));
//   });
// }
