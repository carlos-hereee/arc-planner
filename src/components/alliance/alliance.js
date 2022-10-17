import React, { useEffect, useContext } from "react";
import AllianceNavLink from "./allianceNavLink";
import AllianceList from "../kingdom/AllianceList";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";

const Alliance = () => {
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
      <div className="buttons">{/* <Navbar /> */}</div>
    </div>
  );
};
export default Alliance;
