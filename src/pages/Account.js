import React, { useContext } from "react";
import { AuthContext } from "../utils/context/Auth/AuthContext";

const Account = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  return (
    <section>
      <div className="card">
        <h2>My Account</h2>
        <p>{user.username}</p>
        <span>Kingdom {user.kingdom}</span>
        <span>Alliance {user.alliance}</span>
        <span>Dead {user.dead}</span>
        <span>Kill Points {user.killPoints}</span>
        <button className="btn" type="button">
          Edit
        </button>
      </div>
      <div className="card">
        <h2>My troops</h2>
        <p>{user.nickname}</p>
        <span>T4 Infantry {user.tier4Infa}</span>
        <span>T4 Archer {user.tier4Arc}</span>
        <span>T4 Cavalry {user.tier4Cav}</span>
        <span>T4 Infantry {user.tier5Infa}</span>
        <span>T4 Archer {user.tier5Arc}</span>
        <span>T4 Cavalry {user.tier5Cav}</span>
        <button className="btn" type="button">
          Edit
        </button>
      </div>
    </section>
  );
};
export default Account;
