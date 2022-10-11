import React, { useEffect, useContext } from "react";

import Navbar from "./navbar";
import AllianceNavLink from "../components/alliance/allianceNavLink";
import AllianceList from "../components/alliance/allianceList";

import { KingdomContext } from "../utils/context/Kingdom/KingdomContext";

export default function IsMemberAlliance() {
  const { userProfile, getUserProfile } = useContext(KingdomContext);

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
