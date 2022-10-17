import React, { useContext } from "react";
import PlayerCard from "../components/molecules/PlayerCard";
import { UserContext } from "../utils/context/User/UserContext";

const Account = () => {
  const { user } = useContext(UserContext);
  return (
    <section>
      <div className="card">
        <h2>My Account</h2>
        <PlayerCard user={user} />
        <p>
          <span>Alliance: {user.alliance}</span>
        </p>
        <p>
          <span>Dead: {user.dead}</span>
        </p>
        <p>
          <span>Kill Points: {user.killPoints}</span>
        </p>
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
      <div className="card">
        <h2>Settings</h2>
        <p>
          Username: <span>{user.username}</span>
        </p>
        <p>
          Created: <span>{new Date(user.createdAt).toDateString()}</span>
        </p>
      </div>
    </section>
  );
};
export default Account;
