import React, { useState } from "react";
import AllianceCreate from "../alliance/AllianceCreate";
import Empty from "../atoms/Empty";

const AllianceList = ({ list, create, applications, applyAlliance }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="card">
      {show ? <h2>Create Alliance</h2> : <h2>Alliance</h2>}
      <div className="list">
        <div className="list-title">
          <p className="row-element">Name</p>
          <p className="row-element">Announcement </p>
          <div />
        </div>
        {list && list.length > 0 ? (
          list.map((l) => (
            <div key={l.uid} className="list-row">
              <p className="row-element">
                [{l.tag}] {l.name}
              </p>
              <p className="row-element">{l.announcement}</p>
              {applications &&
              applications.length > 0 &&
              applications.some((a) => a.allianceId === l.uid) ? (
                <button
                  className="btn btn-danger"
                  onClick={() => applyAlliance(l, false)}>
                  Cancel
                </button>
              ) : (
                <button className="btn" onClick={() => applyAlliance(l, true)}>
                  Apply
                </button>
              )}
            </div>
          ))
        ) : show ? (
          <AllianceCreate setShow={setShow} create={create} />
        ) : (
          <Empty />
        )}
      </div>
      {show && (
        <button className="btn" onClick={() => setShow(!show)}>
          Create Alliance
        </button>
      )}
    </div>
  );
};
export default AllianceList;
