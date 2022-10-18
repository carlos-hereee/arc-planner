import React, { useEffect, useContext } from "react";
import AllianceNavLink from "./allianceNavLink";
import AllianceList from "../kingdom/AllianceList";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import { UserContext } from "../../utils/context/User/UserContext";

const Alliance = () => {
  // const { userProfile } = useContext(KingdomContext);
  const { user } = useContext(UserContext);

  return (
    <div>
      <AllianceNavLink />
      {/* {user && user.isMember ?  : <AllianceList />} */}
      <div className="buttons">{/* <Navbar /> */}</div>
    </div>
  );
};
export default Alliance;
