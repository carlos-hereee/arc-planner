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
    applications: [],
    log: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.kingdomId) {
      getKingdom(user.kingdomId);
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
    } catch {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: "ERROR" });
    }
  };
  const getKingdom = async (id) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get(`kingdom/${id}`);
      dispatch({ type: "UPDATE_KINGDOM", payload: data });
    } catch (e) {
      const { message } = error.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: message });
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
  const getKingdomApp = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.get("/kingdom/user-application");
      dispatch({ type: "KINGDOM_APPLICATIONS", payload: data.data });
    } catch (e) {
      const response = e.response.data.message;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: response });
    }
  };
  const cancelAppKingdom = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.delete(
        `/kingdom/user-application/${values.uid}`
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
    } catch {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: "ERROR" });
    }
  };
  const createAlliance = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.post("/kingdom/alliance", {
        values,
      });
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data.message });
    } catch {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: "ERROR" });
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
        createKingdom,
        getAllKingdom,
        applyKingdom,
        cancelAppKingdom,
        updateKingdomList,
        getKingdomList,
        createAlliance,
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
