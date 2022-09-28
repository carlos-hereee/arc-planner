import React, { useContext, useEffect } from "react";

import { PlayerContext } from "../../utils/context/Player/PlayerState";

export default function AllianceHeader() {
  const { alliance, getAlliance } = useContext(PlayerContext);
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
