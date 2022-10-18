import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { axiosWithAuth } from "../../axiosWithAuth";
import { UserContext } from "../User/UserContext";

export const KingdomContext = createContext();
export const KingdomState = (props) => {
  // create and initial state
  const initialState = {
    isLoading: true,
    kingdom: {},
    kingdomList: [],
    allianceList: [],
    applicantList: [],
    kingdomAllianceApps: [],
    applications: [],
    members: [],
    log: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.kingdomId) {
      getKingdom();
    } else {
      getAllKingdom();
      getKingdomApp();
    }
  }, [user.kingdomId]);

  const getKingdom = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get("kingdom/");
      dispatch({ type: "UPDATE_KINGDOM", payload: data });
    } catch (e) {
      const { message } = error.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: message });
    }
  };
  const getKingdomApplicants = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get("/kingdom/applicants");
      dispatch({ type: "UPDATE_KINGDOM_APPLICANT_LIST", payload: data });
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };
  const getAlliance = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get("/kingdom/alliance");
      dispatch({ type: "UPDATE_ALLIANCE_LIST", payload: data });
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };
  const getAllianceApps = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get(
        "kingdom/alliance/applications/"
      );
      dispatch({ type: "UPDATE_ALLIANCE_APPLICATION_LIST", payload: data });
    } catch (e) {
      const { message } = error.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: message });
    }
  };
  const getKingdomApp = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.get("/kingdom/applications");
      dispatch({ type: "KINGDOM_APPLICATIONS", payload: data.data });
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };
  const getAllKingdom = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.get("/kingdom/all");
      dispatch({ type: "UPDATE_KINGDOM_LIST", payload: data.data });
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };
  const getMembers = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get("kingdom/members");
      dispatch({ type: "UPDATE_MEMBERS", payload: data });
    } catch (e) {
      const { message } = error.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: message });
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
  const createAlliance = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.post("/kingdom/alliance", {
        values,
      });
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data.message });
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };
  const cancelAppKingdom = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.delete(
        `/kingdom/applications/${values.uid}`
      );
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data.message });
      getKingdomApp();
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };
  const updateKingdomList = async (search) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const list = await axiosWithAuth.put("/kingdom/filter", { search });
      dispatch({ type: "UPDATE_KINGDOM_LIST", payload: list.data });
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };
  const applyKingdom = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.post("/kingdom/apply", {
        ...values,
        type: "kingdom",
      });
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data.message });
      getKingdomApp();
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };
  const kingdomAllianceApply = async (values, isApply) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = isApply
        ? await axiosWithAuth.post("/kingdom/alliance/apply", { values })
        : await axiosWithAuth.delete(`/kingdom/alliance/apply/${values.uid}`);
      getAllianceApps();
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data.message });
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };
  const leaveKingdom = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      await axiosWithAuth.put("kingdom/leave");
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
        kingdom: state.kingdom,
        kingdomList: state.kingdomList,
        allianceList: state.allianceList,
        applicantList: state.applicantList,
        applications: state.applications,
        kingdomAppList: state.kingdomAppList,
        kingdomAllianceApps: state.kingdomAllianceApps,
        members: state.members,
        createKingdom,
        getAllKingdom,
        applyKingdom,
        cancelAppKingdom,
        updateKingdomList,
        createAlliance,
        kingdomAllianceApply,
        getAlliance,
        getMembers,
        getAllianceApps,
        getKingdomApplicants,
        leaveKingdom,
      }}>
      {props.children}
    </KingdomContext.Provider>
  );
};
