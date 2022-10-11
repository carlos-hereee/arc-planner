import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { axiosWithAuth } from "../../axiosWithAuth";

export const KingdomContext = createContext();

export const KingdomState = (props) => {
  // create and initial state
  const initialState = {
    error: "",
    isLoading: false,
    allianceListError: "",
    eventsError: "",
    willParticipateMessage: "",
    alliance: [],
    allianceList: [],
    events: [],
    participants: [],
    eventsList: [],
    profile: [],
    userProfile: { isMember: false },
    applications: [],
    members: [],
    permissions: {},
    teams: [],
    participatingEvents: [],
    listApps: [],
    kingdom: {},
    kingdomList: [],
    log: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addImg = async (file) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.put(`profile/img/`, file);
      dispatch({ type: "IMG_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "IMG_ERROR", payload: e.response });
    }
  };
  const getAlliance = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`/alliance/`);
      dispatch({ type: "GET_ALLIANCE_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("e", e);
      e.response && e.response.status === 401
        ? logOut()
        : dispatch({ type: "GET_ALLIANCE_ERROR", payload: e.response });
    }
  };
  const getPermissions = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`/alliance/permissions`);
      dispatch({ type: "GET_PRIVILEGE_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("e", e);
      dispatch({ type: "GET_PRIVILEGE_ERROR", payload: e.response });
    }
  };
  const getAllianceList = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`alliance/list`);
      dispatch({ type: "GET_ALLIANCE_LIST_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("e", e);
      e.response && e.response.status === 401
        ? logOut()
        : dispatch({ type: "GET_ALLIANCE_LIST_ERROR", payload: e.response });
    }
  };
  const createAlliance = async (data) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.post(`alliance/`, data);
      dispatch({ type: "CREATE_ALLIANCE_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "CREATE_ALLIANCE_ERROR", payload: e.response });
    }
  };
  const getApplications = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`alliance/applications`);
      dispatch({ type: "GET_APPLICATIONS_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("e", e);
      dispatch({ type: "GET_APPLICATIONS_ERROR", payload: e.response });
    }
  };
  const sendApplication = async (allianceId) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.post(
        `/alliance/applications/apply/${allianceId}`
      );
      dispatch({ type: "SEND_APPLICATION_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "SEND_APPLICATION_ERROR", payload: e.response });
    }
  };
  const cancelApplication = async (allianceId) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.delete(
        `/alliance/applications/cancel/${allianceId}`
      );
      console.log("res", res);
      dispatch({ type: "CANCEL_APP_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "CANCEL_APP_ERROR", payload: e.response });
    }
  };
  const getCurrentEvents = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`event/current`);
      dispatch({ type: "GET_CURRENT_EVENTS_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "GET_CURRENT_EVENTS_ERROR", payload: e.response });
    }
  };
  const getMembers = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`/alliance/members`);
      dispatch({ type: "GET_MEMBERS_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error getting members", e);
      dispatch({ type: "GET_MEMBERS_ERROR", payload: e.response });
    }
  };
  const createEvents = async (body) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.post(`/event`, body);
      dispatch({ type: "CREATE_EVENTS_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "CREATE_EVENTS_ERROR", payload: e.response });
    }
  };
  const deleteEvent = async (eventId) => {
    dispatch({ type: "IS_LOADING", payload: true });
    console.log("eventId", eventId);
    try {
      const res = await axiosWithAuth.delete(`/event/${eventId}`);
      dispatch({ type: "DELETE_EVENT_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "DELETE_EVENT_ERROR", payload: e.response });
    }
  };
  const willParticipate = async (isParticipating, eventId) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.put(`/event/${eventId}`, {
        isParticipating,
      });
      dispatch({ type: "WILL_PARTICIPATE_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "WILL_PARTICIPATE_ERROR", payload: e.response });
    }
  };
  const getAllEvents = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`/event/all`);
      dispatch({ type: "GET_ALL_EVENTS_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("e", e);
      dispatch({ type: "GET_ALL_EVENTS_ERROR", payload: e.response });
    }
  };
  const getEvent = async (eventId) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`/event/specific/${eventId}/`);
      dispatch({ type: "GET_EVENT_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "GET_EVENT_ERROR", payload: e.response });
    }
  };
  const createTeam = async (body, eventId) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.post(`/event/team/${eventId}`, body);
      dispatch({ type: "CREATE_TEAM_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "CREATE_TEAM_ERROR", payload: e.response });
    }
  };
  const initChoice = async (data, eventId) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.post(`/event/participation/${eventId}`, {
        data,
      });
      dispatch({ type: "INIT_CHOICE_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "INIT_CHOICE_ERROR", payload: e.response });
    }
  };
  const getParticipatingEvents = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`/event/participating`);
      dispatch({ type: "PARTICIPATING_EVENTS_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "PARTICIPATING_EVENTS_ERROR", payload: e.response });
    }
  };
  const updateTeams = async (old, newest) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.put(`/event/ondrop/teams`, {
        old: old,
        newest: newest,
      });
      dispatch({ type: "UPDATE_TEAMS_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "UPDATE_TEAMS_ERROR", payload: e.response });
    }
  };
  const allianceSettings = async (data) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.put(`alliance/changes`, data);
      dispatch({ type: "ALLIANCE_SETTINGS_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "ALLIANCE_SETTINGS_ERROR", payload: e.response });
    }
  };
  const deleteAlliance = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.delete(`alliance/delete`);
      dispatch({ type: "DELETE_ALLIANCE_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "DELETE_ALLIANCE_ERROR", payload: e.response });
    }
  };
  const getApps = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.get(`alliance/apps`);
      dispatch({ type: "GET_APPS_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "GET_APPS_ERROR", payload: e.response });
    }
  };
  const acceptApp = async (allianceId, profileId) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithAuth.put(
        `alliance/${profileId}/accept/${allianceId}`
      );
      dispatch({ type: "ACCEPT_APP_SUCCESS", payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: "ACCEPT_APP_ERROR", payload: e.response });
    }
  };
  const createKingdom = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.post("/kingdom", values);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data.message });
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };

  return (
    <KingdomContext.Provider
      value={{
        isLoading: state.isLoading,
        allianceListError: state.allianceListError,
        willParticipateMessage: state.willParticipateMessage,
        eventsError: state.eventsError,
        alliance: state.alliance,
        participants: state.participants,
        events: state.events,
        eventsList: state.eventsList,
        members: state.members,
        allianceList: state.allianceList,
        applications: state.applications,
        profile: state.profile,
        participatingEvents: state.participatingEvents,
        permissions: state.permissions,
        userProfile: state.userProfile,
        teams: state.teams,
        listApps: state.listApps,
        kingdom: state.kingdom,
        kingdomList: state.kingdomList,
        getPermissions,
        addImg,
        getAlliance,
        getAllianceList,
        createAlliance,
        getApplications,
        sendApplication,
        cancelApplication,
        getCurrentEvents,
        getMembers,
        createEvents,
        deleteEvent,
        willParticipate,
        getAllEvents,
        getEvent,
        createTeam,
        initChoice,
        getParticipatingEvents,
        updateTeams,
        allianceSettings,
        deleteAlliance,
        getApps,
        acceptApp,
        createKingdom,
      }}>
      {state.error && (
        <div className="global_error">
          <p>{state.error}</p>
          <button onClick={refreshPage} color="blue">
            click to reload
          </button>
        </div>
      )}
      {props.children}
    </KingdomContext.Provider>
  );
};
