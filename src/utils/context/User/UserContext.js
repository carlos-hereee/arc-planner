import React, { createContext, useContext, useEffect, useReducer } from "react";
import { axiosWithAuth } from "../../axiosWithAuth";
import { AuthContext } from "../Auth/AuthContext";
import { reducer } from "./reducer";
export const UserContext = createContext();

export const UserState = ({ children }) => {
  const initialState = { isLoading: false, user: [], log: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { accessToken } = useContext(AuthContext);
  useEffect(() => {
    if (accessToken) {
      getUserData();
    }
  }, [accessToken]);
  const getUserData = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get("/users");
      dispatch({ type: "UPDATE_USER_DATA", payload: res.data });
    } catch (e) {
      const { message } = error.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: message });
    }
  };
  return (
    <UserContext.Provider
      value={{ user: state.user, isLoading: state.isLoading, log: state.log }}>
      {children}
    </UserContext.Provider>
  );
};
