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
		error: null,
		isLoading: false,
		userProfile: null,
		userProfilePic: [],
	};
	const [state, dispatch] = useReducer(authReducer, initialState);

	const register = async (values) => {
		dispatch({ type: IS_LOADING, payload: true });
		const credential = {
			username: values.username,
			email: values.email,
			password: values.password,
		};
		try {
			const response = await client().post("/user/register", credential);
			dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
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
			const response = await client().post("/user/login", credential);
			dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
		} catch (e) {
			dispatch({ type: SIGNIN_FAILURE, payload: e });
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
				accessToken: state.accessToken,
				isLoading: state.isLoading,
				userProfile: state.userProfile,
				signIn,
				register,
				signOut,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
