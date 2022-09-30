import React from "react";
import ProfileImg from "../components/profile/profileimg";
import ProfileTroops from "../components/profile/profileTroops";
import Navbar from "./navbar";

const Account = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <h1>Governor Profile</h1>
        </div>
        <div className="body">
          <div className="content">
            <ProfileImg />
            <ProfileTroops />
          </div>
        </div>
        <div className="buttons">
          <Navbar />
        </div>
      </div>
    </div>
  );
};
export default Account;
