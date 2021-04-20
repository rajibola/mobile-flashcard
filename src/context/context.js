import React, { createContext } from 'react';
import { DeckReducer } from './reducer';

export const AppContext = createContext({
  state: {},
  dispatch: () => null,
});

export function AppProvider(props) {
  const [state, dispatch] = React.useReducer(DeckReducer);
  const value = { state, dispatch };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
