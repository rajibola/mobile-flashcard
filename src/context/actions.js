export function receiveDecks(decks) {
  return {
    type: 'RECEIVE_DECKS',
    decks,
  };
}

export function addDeck(title, subtitle, backgroundColor) {
  return {
    type: 'ADD_DECK',
    title,
    subtitle,
    backgroundColor,
  };
}

export function removeDeck(id) {
  return {
    type: 'REMOVE_DECK',
    id,
  };
}

export function addCardToDeck(id, card) {
  return {
    type: 'ADD_CARD',
    deckId: id,
    card,
  };
}

export function resetStore() {
  return {
    type: 'RESET_STORE',
  };
}
