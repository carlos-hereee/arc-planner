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
      getKingdomAllianceApps();
      getMembers();
    } else {
      getAllKingdom();
      getKingdomApp();
    }
  }, [user.kingdomId]);

  const getKingdomList = async (search) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get(`/kingdom/search/${search}`);
      dispatch({ type: "GET_KINGDOM_LIST", payload: data });
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };
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
  const getKingdomAllianceApps = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get("kingdom/alliance/apply/");
      dispatch({ type: "UPDATE_KINGDOM_ALLIANCE_APPS", payload: data });
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
      getKingdomAllianceApps();
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
        applications: state.applications,
        kingdomAppList: state.kingdomAppList,
        kingdomAllianceApps: state.kingdomAllianceApps,
        members: state.members,
        createKingdom,
        getAllKingdom,
        applyKingdom,
        cancelAppKingdom,
        updateKingdomList,
        getKingdomList,
        createAlliance,
        kingdomAllianceApply,
      }}>
      {props.children}
    </KingdomContext.Provider>
  );
};

{
  /* {state.error && (
  <div className="global_error">
    <p>{state.error}</p>
    <button onClick={refreshPage} color="blue">
      click to reload
    </button>
  </div>
)} */
}
