import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/context/AuthContext";

export default function Header() {
  const { signOut, accessToken, appName } = useContext(AuthContext);

  return (
    <div className="header">
      <title>{appName}</title>
      <Link to="/">
        <div>{appName}</div>
      </Link>
      {accessToken ? (
        <div className="nav">
          <Link to="/account">
            <button type="button" className="btn">
              Account
            </button>
          </Link>
          <button className="btn" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="sign-up">Create Account</Link>
      )}
    </div>
  );
}
