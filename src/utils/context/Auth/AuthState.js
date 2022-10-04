import React, { createContext, useReducer } from "react";
import authReducer from "./reducer";
import { axiosWithOutAuth } from "../../axiosWithAuth";
import { logOut } from "../../localStorage";

export const AuthContext = createContext();

export const AuthState = (props) => {
  const initialState = {
    isLoading: false,
    signInError: "",
    signUpError: "",
    accessToken: "",
    refreshToken: "",
    appName: "Rok Handbook",
    user: {},
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithOutAuth.post("/users/register", values);
      dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
    } catch (error) {
      const { message } = error.response.data;
      dispatch({ type: "SIGNUP_FAILURE", payload: message });
    }
  };
  const signIn = async (values) => {
    try {
      const res = await axiosWithOutAuth.post("/users/login", values);
      dispatch({ type: "SIGNIN_SUCCESS", payload: res.data });
    } catch (e) {
      dispatch({ type: "SIGNIN_FAILURE", payload: e.response.data.message });
    }
  };
  const signOut = () => {
    try {
      dispatch({ type: "SIGNOUT_SUCCESS" });
      logOut();
    } catch (error) {
      dispatch({ type: "SIGNOUT_FAILURE", payload: error.message });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        isLoading: state.isLoading,
        signInError: state.signInError,
        signUpError: state.signUpError,
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
