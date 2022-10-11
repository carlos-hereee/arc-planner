const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const addToLog = (state, action) => {
  return {
    ...state,
    isLoading: false,
    log: [...state.log, action.payload],
  };
};
const getKingdomList = (state, action) => {
  return {
    ...state,
    isLoading: false,
    kingdomList: action.payload,
  };
};
const kingdomApp = (state, action) => {
  return {
    ...state,
    isLoading: false,
    applications: action.payload,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "ADD_MESSAGE_TO_LOG":
      return addToLog(state, action);
    case "UPDATE_KINGDOM_LIST":
      return getKingdomList(state, action);
    case "KINGDOM_APPLICATIONS":
      return kingdomApp(state, action);
    default:
      return state;
  }
};
