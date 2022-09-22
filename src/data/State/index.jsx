import { createContext, useState } from "react";

const State = createContext([{}, (obj) => obj]);

export const StateProvider = ({ children }) => {
  const appState = {
    submissions: useState({
      data: [],
      received: false,
      requesting: false,
    }),
    questions: useState({
      data: [],
      received: false,
      requesting: false,
    }),
  };

  return <State.Provider value={appState}>{children}</State.Provider>;
};

export default State;
