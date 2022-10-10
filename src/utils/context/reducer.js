const isLoading = (state, action) => {
  return { ...state, isLoading: action.payload };
};
const signInSuccess = (state, action) => {
  localStorage.setItem("accessToken", action.payload.accessToken);
  return {
    ...state,
    isLoading: false,
    signInError: null,
    accessToken: action.payload.accessToken,
    refreshToken: action.payload.refreshToken,
    user: action.payload.user,
  };
};

const signInERROR = (state, action) => {
  return { ...state, isLoading: false, signInError: action.payload };
};
const signUpSuccess = (state, action) => {
  localStorage.setItem("accessToken", action.payload.accessToken);
  return {
    ...state,
    isLoading: false,
    accessToken: action.payload.accessToken,
    refreshToken: action.payload.refreshToken,
    user: action.payload.user,
  };
};

const signUpERROR = (state, action) => {
  return { ...state, signUpError: action.payload, isLoading: false };
};

const signOutSuccess = (state, action) => {
  return {
    ...state,
    signUpError: "",
    isLoading: false,
    user: "",
    accessToken: "",
  };
};
const signOutERROR = (state, action) => {
  return {
    ...state,
    signOutError: action.payload,
  };
};
const authReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "SIGNIN_SUCCESS":
      return signInSuccess(state, action);
    case "SIGNIN_ERROR":
      return signInERROR(state, action);
    case "SIGNUP_SUCCESS":
      return signUpSuccess(state, action);
    case "SIGNUP_ERROR":
      return signUpERROR(state, action);
    case "SIGNOUT_SUCCESS":
      return signOutSuccess(state, action);
    case "SIGNOUT_ERROR":
      return signOutERROR(state, action);
    default:
      return state;
  }
};

export default authReducer;