import React, { useContext } from "react";
import { AuthContext } from "../utils/context/Auth/AuthContext";

const Account = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  return (
    <section>
      <div className="card">
        <h2>My Account</h2>
        <p>Username: {user.username}</p>
        <p>Nickname: {user.nickname}</p>
        <span>Kingdom: {user.kingdom}</span>
        <span>Alliance: {user.alliance}</span>
        <span>Dead: {user.dead}</span>
        <span>Kill Points: {user.killPoints}</span>
      </div>
      <div className="card">
        <h2>My troops</h2>
        <span>Tier 4 Infantry {user.tier4Infa}</span>
        <span>Tier 4 Archer {user.tier4Arc}</span>
        <span>Tier 4 Cavalry {user.tier4Cav}</span>
        <span>Tier 5 Infantry {user.tier5Infa}</span>
        <span>Tier 5 Archer {user.tier5Arc}</span>
        <span>Tier 5 Cavalry {user.tier5Cav}</span>
        <button className="btn" type="button">
          Edit
        </button>
      </div>
    </section>
  );
};
export default Account;
