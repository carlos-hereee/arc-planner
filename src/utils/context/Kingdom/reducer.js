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
const updateKingdomList = (state, action) => {
  return {
    ...state,
    isLoading: false,
    kingdomList: action.payload,
  };
};
const updateKingdom = (state, action) => {
  return {
    ...state,
    isLoading: false,
    kingdom: action.payload,
  };
};
const kingdomApp = (state, action) => {
  return {
    ...state,
    isLoading: false,
    applications: action.payload,
  };
};
const getKingdomList = (state, action) => {
  return {
    ...state,
    isLoading: false,
    kingdomAppList: action.payload,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "ADD_MESSAGE_TO_LOG":
      return addToLog(state, action);
    case "UPDATE_KINGDOM_LIST":
      return updateKingdomList(state, action);
    case "UPDATE_KINGDOM":
      return updateKingdom(state, action);
    case "KINGDOM_APPLICATIONS":
      return kingdomApp(state, action);
    case "GET_KINGDOM_LIST":
      return getKingdomList(state, action);
    default:
      return state;
  }
};
