import React, { createContext, useReducer } from "react";
import { initialState, NoteReducer } from "../reducers/NoteReducer";

export const NoteContext = createContext();

export default ({ children }) => {
  const [state, dispatch] = useReducer(NoteReducer, initialState);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
