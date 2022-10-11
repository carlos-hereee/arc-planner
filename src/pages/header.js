import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/context/Auth/AuthContext";

export default function Header() {
  const { accessToken, appName } = useContext(AuthContext);

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
        </div>
      ) : (
        <Link to="sign-up">Create Account</Link>
      )}
    </div>
  );
}
