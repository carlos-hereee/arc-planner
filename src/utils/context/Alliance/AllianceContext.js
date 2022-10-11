import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const AllianceContext = createContext();

export const AllianceState = ({ children }) => {
  const initialState = { isLoading: false, alliance: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUserProfile = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`/user`);
      dispatch({ type: "GET_USER_PROFILE_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "GET_USER_PROFILE_ERROR", payload: e.response });
    }
  };
  const getProfile = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`/profile`);
      dispatch({ type: "GET_PROFILE_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("e", e);
      e.response.status === 401
        ? logOut()
        : dispatch({ type: "GET_ALLIANCE_ERROR", payload: e.response });
    }
  };
  const updateTroops = async (type, count) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.put(`/profile/change?${type}=${count}`);
      dispatch({ type: "UPDATE_TROOPS_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "UPDATE_TROOPS_ERROR", payload: e.response });
    }
  };
  const updateProfile = async (data) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.put(`/profile/ncc`, data);
      dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "UPDATE_PROFILE_ERROR", payload: e.response });
    }
  };

  return (
    <AllianceContext.Provider
      value={{
        alliance: state.alliance,
        isLoading: state.isLoading,
        getUserProfile,
        updateTroops,
        getProfile,
        updateProfile,
      }}>
      {children}
    </AllianceContext.Provider>
  );
};
