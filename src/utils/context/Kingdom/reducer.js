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
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "ADD_MESSAGE_TO_LOG":
      return addToLog(state, action);
    case "GET_KINGDOM_LIST":
      return getKingdomList(state, action);
    default:
      return state;
  }
};
