import React, { createContext, useReducer, useEffect, useState } from "react";

import {
  IS_LOADING,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
} from "../types";

import authReducer from "./reducer";

import { client } from "../../axiosWithAuth";

import { logOut } from "../../localStorage";

export const AuthContext = createContext();

export const AuthState = (props) => {
  const initialState = {
    isLoading: false,
    signInError: null,
    accessToken: null,
    refreshToken: null,
    userProfile: null,
    userProfilePic: [],
    appName: "Rok Handbook",
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async (values) => {
    dispatch({ type: IS_LOADING, payload: true });
    const credential = {
      username: values.username,
      email: values.email,
      password: values.password,
      inGameName: values.inGameName,
    };
    try {
      const res = await client().post("/user/register", credential);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: SIGNUP_FAILURE, payload: error });
    }
  };
  const signIn = async (values) => {
    const credential = {
      userId: values.username,
      password: values.password,
    };
    try {
      const res = await client().post("/user/login", credential);
      dispatch({ type: SIGNIN_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("e", e);
      dispatch({ type: SIGNIN_FAILURE, payload: e.response.data.message });
    }
  };
  const signOut = () => {
    try {
      dispatch({ type: SIGNOUT_SUCCESS });
      logOut();
    } catch (error) {
      dispatch({ type: SIGNOUT_FAILURE, payload: error.message });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        isLoading: state.isLoading,
        signInError: state.signInError,
        accessToken: state.accessToken,
        userProfile: state.userProfile,
        appName: state.appName,
        signIn,
        register,
        signOut,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
