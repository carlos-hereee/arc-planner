import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { checkAuth } from "../utils/localStorage";

import { AuthContext } from "../utils/context/Auth/AuthState";

export default function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <div className="header">
      <div>
        <Link to="/">Ark Planner</Link>
      </div>
      {checkAuth() ? (
        <div className="nav">
          <div className="content">
            <Link to="/user">Profile</Link>
          </div>
          <div onClick={() => signOut()} className="content">
            Sign Out
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
