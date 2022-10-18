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
const updateAllianceList = (state, action) => {
  return {
    ...state,
    isLoading: false,
    allianceList: action.payload,
  };
};
const updateMembers = (state, action) => {
  return {
    ...state,
    isLoading: false,
    members: action.payload,
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
const getKingdomAllianceApps = (state, action) => {
  return {
    ...state,
    isLoading: false,
    kingdomAllianceApps: action.payload,
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
    case "UPDATE_ALLIANCE_LIST":
      return updateAllianceList(state, action);
    case "UPDATE_MEMBERS":
      return updateMembers(state, action);
    case "KINGDOM_APPLICATIONS":
      return kingdomApp(state, action);
    case "UPDATE_KINGDOM_ALLIANCE_APPS":
      return getKingdomAllianceApps(state, action);
    default:
      return state;
  }
};
