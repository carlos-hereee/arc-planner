import {
  IS_LOADING,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  UPDATE_TROOPS_SUCCESS,
  UPDATE_TROOPS_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  IMG_SUCCESS,
  IMG_ERROR,
  GET_ALLIANCE_SUCCESS,
  GET_ALLIANCE_ERROR,
  GET_ALLIANCE_LIST_SUCCESS,
  GET_ALLIANCE_LIST_ERROR,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
  GET_APPLICATIONS_SUCCESS,
  GET_APPLICATIONS_ERROR,
  SEND_APPLICATION_SUCCESS,
  SEND_APPLICATION_ERROR,
  CANCEL_APP_SUCCESS,
  CANCEL_APP_ERROR,
  CREATE_ALLIANCE_SUCCESS,
  CREATE_ALLIANCE_ERROR,
  GET_CURRENT_EVENTS_SUCCESS,
  GET_CURRENT_EVENTS_ERROR,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR,
  GET_PRIVILEGE_SUCCESS,
  GET_PRIVILEGE_ERROR,
  CREATE_EVENTS_SUCCESS,
  CREATE_EVENTS_ERROR,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_ERROR,
  WILL_PARTICIPATE_SUCCESS,
  WILL_PARTICIPATE_ERROR,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_ERROR,
  GET_EVENT_SUCCESS,
  GET_EVENT_ERROR,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_ERROR,
  INIT_CHOICE_SUCCESS,
  INIT_CHOICE_ERROR,
  PARTICIPATING_EVENTS_SUCCESS,
  PARTICIPATING_EVENTS_ERROR,
  UPDATE_TEAMS_SUCCESS,
  UPDATE_TEAMS_ERROR,
  ALLIANCE_SETTINGS_SUCCESS,
  ALLIANCE_SETTINGS_ERROR,
  DELETE_ALLIANCE_SUCCESS,
  DELETE_ALLIANCE_ERROR,
  GET_APPS_SUCCESS,
  GET_APPS_ERROR,
  ACCEPT_APP_SUCCESS,
  ACCEPT_APP_ERROR,
} from "../types";
// updates the state
const setIsLoading = (state, action) => {
  return {
    ...state,
    is_loading: action.payload,
  };
};

const getProfile = (state, action) => {
  return {
    ...state,
    is_loading: false,
    profile: action.payload,
  };
};
const getProfileError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const getUserProfile = (state, action) => {
  return {
    ...state,
    is_loading: false,
    userProfile: { ...action.payload },
  };
};
const getUserProfileError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const updateTroops = (state, action) => {
  return {
    ...state,
    is_loading: false,
    profile: action.payload,
  };
};
const updateTroopsError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const updateProfile = (state, action) => {
  return {
    ...state,
    is_loading: false,
    profile: action.payload,
  };
};
const updateProfileError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const addImg = (state, action) => {
  return {
    ...state,
    is_loading: false,
    profile: action.payload,
  };
};
const addImgError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const getAlliance = (state, action) => {
  return {
    ...state,
    is_loading: false,
    alliance: action.payload,
  };
};
const getAllianceError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const getAllianceList = (state, action) => {
  return {
    ...state,
    is_loading: false,
    allianceList: action.payload,
  };
};
const getAllianceListError = (state, action) => {
  return {
    ...state,
    is_loading: false,
    allianceListError: action.payload.data.message,
  };
};
const getApplication = (state, action) => {
  return {
    ...state,
    is_loading: false,
    applications: action.payload,
  };
};
const getApplicationError = (state, action) => {
  return {
    ...state,
    error: action.payload.message,
    is_loading: false,
  };
};
const sendApplication = (state, action) => {
  return {
    ...state,
    is_loading: false,
    applications: action.payload,
  };
};
const sendApplicationError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const cancelApp = (state, action) => {
  return {
    ...state,
    is_loading: false,
    applications: action.payload,
  };
};
const cancelAppError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const createAlliance = (state, action) => {
  return {
    ...state,
    is_loading: false,
    alliance: action.payload.alliance,
    userProfile: action.payload.profile,
  };
};
const createAllianceError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const getCurrentEvents = (state, action) => {
  return {
    ...state,
    is_loading: false,
    events: action.payload,
    eventsError: "",
  };
};
const getCurrentEventsError = (state, action) => {
  return {
    ...state,
    eventsError: action.payload.data.message,
    is_loading: false,
  };
};
const getMembers = (state, action) => {
  return {
    ...state,
    is_loading: false,
    members: action.payload,
  };
};
const getMembersError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const getPermissions = (state, action) => {
  return {
    ...state,
    is_loading: false,
    permissions: action.payload,
  };
};
const getPermissionsError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const createEvents = (state, action) => {
  return {
    ...state,
    is_loading: false,
    eventsError: "",
    eventsList: action.payload,
  };
};
const createEventsError = (state, action) => {
  return {
    ...state,
    eventsError: action.payload.message,
    is_loading: false,
  };
};
const deleteEvent = (state, action) => {
  return {
    ...state,
    is_loading: false,
    eventsList: action.payload,
  };
};
const deleteEventError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const willParticipate = (state, action) => {
  return {
    ...state,
    is_loading: false,
    willParticipateMessage: action.payload.message,
  };
};

const getAllEvents = (state, action) => {
  return {
    ...state,
    is_loading: false,
    eventsList: action.payload,
  };
};
const getAllEventsError = (state, action) => {
  return {
    ...state,
    eventsError: action.payload.data.message,
    is_loading: false,
  };
};
const getEvent = (state, action) => {
  return {
    ...state,
    is_loading: false,
    participants: action.payload.participants,
    teams: action.payload.teams,
  };
};
const getEventError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const createTeam = (state, action) => {
  return {
    ...state,
    is_loading: false,
    teams: action.payload,
  };
};
const createTeamError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const initChoice = (state, action) => {
  return {
    ...state,
    is_loading: false,
    events: action.payload,
  };
};
const initChoiceError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const participatingEvents = (state, action) => {
  return {
    ...state,
    is_loading: false,
    participatingEvents: action.payload,
  };
};
const participatingEventsError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const updateTeams = (state, action) => {
  return {
    ...state,
    is_loading: false,
    teams: action.payload,
  };
};
const updateTeamsError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const allianceSettings = (state, action) => {
  return {
    ...state,
    is_loading: false,
    alliance: action.payload,
  };
};
const allianceSettingsError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const deleteAlliance = (state, action) => {
  return {
    ...state,
    is_loading: false,
    allianceList: action.payload,
  };
};
const deleteAllianceError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const getApps = (state, action) => {
  return {
    ...state,
    is_loading: false,
    listApps: action.payload,
  };
};
const getAppsError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const acceptApp = (state, action) => {
  return {
    ...state,
    is_loading: false,
    listApps: action.payload,
  };
};
const acceptAppError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
// cases
export const reducer = (state, action) => {
  switch (action.type) {
    case IS_LOADING:
      return setIsLoading(state, action);
    case GET_PROFILE_SUCCESS:
      return getProfile(state, action);
    case GET_USER_PROFILE_SUCCESS:
      return getUserProfile(state, action);
    case GET_USER_PROFILE_ERROR:
      return getUserProfileError(state, action);
    case GET_PROFILE_ERROR:
      return getProfileError(state, action);
    case UPDATE_TROOPS_SUCCESS:
      return updateTroops(state, action);
    case UPDATE_TROOPS_ERROR:
      return updateTroopsError(state, action);
    case UPDATE_PROFILE_SUCCESS:
      return updateProfile(state, action);
    case UPDATE_PROFILE_ERROR:
      return updateProfileError(state, action);
    case IMG_SUCCESS:
      return addImg(state, action);
    case IMG_ERROR:
      return addImgError(state, action);
    case GET_ALLIANCE_SUCCESS:
      return getAlliance(state, action);
    case GET_ALLIANCE_LIST_SUCCESS:
      return getAllianceList(state, action);
    case GET_ALLIANCE_LIST_ERROR:
      return getAllianceListError(state, action);
    case GET_ALLIANCE_ERROR:
      return getAllianceError(state, action);
    case GET_APPLICATIONS_SUCCESS:
      return getApplication(state, action);
    case GET_APPLICATIONS_ERROR:
      return getApplicationError(state, action);
    case SEND_APPLICATION_SUCCESS:
      return sendApplication(state, action);
    case SEND_APPLICATION_ERROR:
      return sendApplicationError(state, action);
    case CANCEL_APP_SUCCESS:
      return cancelApp(state, action);
    case CANCEL_APP_ERROR:
      return cancelAppError(state, action);
    case CREATE_ALLIANCE_SUCCESS:
      return createAlliance(state, action);
    case CREATE_ALLIANCE_ERROR:
      return createAllianceError(state, action);
    case GET_CURRENT_EVENTS_SUCCESS:
      return getCurrentEvents(state, action);
    case GET_CURRENT_EVENTS_ERROR:
      return getCurrentEventsError(state, action);
    case GET_MEMBERS_SUCCESS:
      return getMembers(state, action);
    case GET_MEMBERS_ERROR:
      return getMembersError(state, action);
    case GET_PRIVILEGE_SUCCESS:
      return getPermissions(state, action);
    case GET_PRIVILEGE_ERROR:
      return getPermissionsError(state, action);
    case CREATE_EVENTS_SUCCESS:
      return createEvents(state, action);
    case CREATE_EVENTS_ERROR:
      return createEventsError(state, action);
    case DELETE_EVENT_SUCCESS:
      return deleteEvent(state, action);
    case DELETE_EVENT_ERROR:
      return deleteEventError(state, action);
    case WILL_PARTICIPATE_SUCCESS:
      return willParticipate(state, action);
    case GET_ALL_EVENTS_SUCCESS:
      return getAllEvents(state, action);
    case GET_ALL_EVENTS_ERROR:
      return getAllEventsError(state, action);
    case GET_EVENT_SUCCESS:
      return getEvent(state, action);
    case GET_EVENT_ERROR:
      return getEventError(state, action);
    case CREATE_TEAM_SUCCESS:
      return createTeam(state, action);
    case CREATE_TEAM_ERROR:
      return createTeamError(state, action);
    case INIT_CHOICE_SUCCESS:
      return initChoice(state, action);
    case INIT_CHOICE_ERROR:
      return initChoiceError(state, action);
    case PARTICIPATING_EVENTS_SUCCESS:
      return participatingEvents(state, action);
    case PARTICIPATING_EVENTS_ERROR:
      return participatingEventsError(state, action);
    case UPDATE_TEAMS_SUCCESS:
      return updateTeams(state, action);
    case UPDATE_TEAMS_ERROR:
      return updateTeamsError(state, action);
    case ALLIANCE_SETTINGS_SUCCESS:
      return allianceSettings(state, action);
    case ALLIANCE_SETTINGS_ERROR:
      return allianceSettingsError(state, action);
    case DELETE_ALLIANCE_SUCCESS:
      return deleteAlliance(state, action);
    case DELETE_ALLIANCE_ERROR:
      return deleteAllianceError(state, action);
    case GET_APPS_SUCCESS:
      return getApps(state, action);
    case GET_APPS_ERROR:
      return getAppsError(state, action);
    case ACCEPT_APP_SUCCESS:
      return acceptApp(state, action);
    case ACCEPT_APP_ERROR:
      return acceptAppError(state, action);
    default:
      return state;
  }
};
