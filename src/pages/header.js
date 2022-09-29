import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/context/Auth/AuthState";

export default function Header() {
  const { signOut, accessToken, appName } = useContext(AuthContext);

  return (
    <div className="header">
      <Link to="/">
        <div>{appName}</div>
      </Link>
      {accessToken ? (
        <div className="nav">
          <div className="content">
            <Link to="/user">Profile</Link>
          </div>
          <button className="content" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="sign-up">Create Account</Link>
      )}
    </div>
  );
}
