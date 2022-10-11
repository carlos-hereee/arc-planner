import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const AllianceContext = createContext();

export const AllianceState = ({ children }) => {
  const initialState = { isLoading: false, alliance: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AllianceContext.Provider
      value={{ alliance: state.alliance, isLoading: state.isLoading }}>
      {children}
    </AllianceContext.Provider>
  );
};
