import React, { useContext, useEffect } from "react";

import CreateAlliance from "./createAlliance";

import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";

export default function AllianceList() {
  const {
    allianceList,
    allianceListError,
    getAllianceList,
    applications,
    sendApplication,
    cancelApplication,
    getApplications,
  } = useContext(KingdomContext);

  useEffect(() => {
    getApplications();
    getAllianceList();
  }, [applications.length]);

  function applicationSent(e) {
    sendApplication(e);
  }
  function applicationCancel(e) {
    cancelApplication(e);
  }
  return (
    <div>
      <div className="header">
        <h1>Alliance List</h1>
      </div>
      <div className="body">
        <div className="content" style={{ flexDirection: "column" }}>
          <h4>Your not currently a member of an alliance</h4>
          {/* <p>search bar</p> */}
          <CreateAlliance />
          <div className="scrollable">
            {allianceListError && (
              <div className="errorWrapper">{allianceListError}</div>
            )}
            {allianceList &&
              allianceList.map((data, idx) => (
                <div key={data.uuid} className="row">
                  <p>{idx + 1}.</p>
                  <p>{data.kingdomNumber}</p>
                  <p>{data.allianceTag}</p>
                  <p>{data.allianceName}</p>

                  {applications.includes(data.uuid) ? (
                    <button
                      className="cancel_btn"
                      onClick={() => applicationCancel(data.uuid)}>
                      Cancel
                    </button>
                  ) : (
                    <button
                      className="save_btn"
                      onClick={() => applicationSent(data.uuid)}>
                      Apply
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
