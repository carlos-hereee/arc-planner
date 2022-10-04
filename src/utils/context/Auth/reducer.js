const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const signInSuccess = (state, action) => {
  localStorage.setItem("refreshToken", action.payload.refreshToken);
  return {
    ...state,
    isLoading: false,
    signInError: null,
    accessToken: action.payload.accessToken,
    refreshToken: action.payload.refreshToken,
    userProfile: action.payload.profile,
  };
};

const signInFailure = (state, action) => {
  console.log("action.payload", action.payload);
  return {
    ...state,
    isLoading: false,
    signInError: action.payload,
  };
};
const signUpSuccess = (state, action) => {
  localStorage.setItem("refreshToken", action.payload.refreshToken);
  return {
    ...state,
    isLoading: false,
    accessToken: action.payload.accessToken,
    refreshToken: action.payload.refreshToken,
    userProfile: action.payload.profile,
  };
};

const signUpFailure = (state, action) => {
  return {
    ...state,
    signUpError: action.payload,
    isLoading: false,
  };
};

const signOutSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    isLoading: false,
    userProfile: null,
    accessToken: null,
  };
};
const signOutFailure = (state, action) => {
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
    case "SIGNIN_FAILURE":
      return signInFailure(state, action);
    case "SIGNUP_SUCCESS":
      return signUpSuccess(state, action);
    case "SIGNUP_FAILURE":
      return signUpFailure(state, action);
    case "SIGNOUT_SUCCESS":
      return signOutSuccess(state, action);
    case "SIGNOUT_FAILURE":
      return signOutFailure(state, action);
    default:
      return state;
  }
};

export default authReducer;
