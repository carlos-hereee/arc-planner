import React, { useEffect, useContext } from "react";

import Navbar from "./navbar";
import AllianceNavLink from "../components/alliance/allianceNavLink";
import AllianceList from "../components/alliance/allianceList";

import { PlayerContext } from "../utils/context/Player/PlayerState";

export default function IsMemberAlliance() {
  const { userProfile, getUserProfile } = useContext(PlayerContext);

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="wrapper">
      {userProfile && userProfile.isMember ? (
        <AllianceNavLink />
      ) : (
        <AllianceList />
      )}
      <div className="buttons">
        <Navbar />
      </div>
    </div>
  );
}
