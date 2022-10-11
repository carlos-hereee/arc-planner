import React, { useContext, useEffect } from "react";

import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";

export default function AllianceHeader() {
  const { alliance, getAlliance } = useContext(KingdomContext);
  useEffect(() => {
    getAlliance();
  }, []);
  return (
    <div>
      <div className="header">
        <div className="info">
          <h1>{`[${alliance.allianceTag}] ${alliance.allianceName}`}</h1>
          <p>{`Alliance Leader: ${
            alliance.inGameName ? alliance.inGameName : "???"
          }`}</p>
          <p>{`Members: ${alliance.count}`}</p>
        </div>
        <div className="messageBoard">{alliance.messageBoard}</div>
      </div>
    </div>
  );
}
