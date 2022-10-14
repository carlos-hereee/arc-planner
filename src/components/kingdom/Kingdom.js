import React, { useContext } from "react";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import { UserContext } from "../../utils/context/User/UserContext";

const Kingdom = () => {
  const { kingdom } = useContext(KingdomContext);
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="card-title">Kingdom {kingdom.name}</h1>
        <h3 className="subtitle">King : {kingdom.kingName}</h3>
        <p className="description">{kingdom.announcement}</p>
      </div>
      <div className="card-nav">
        <button type="button" className="btn">
          kvk
        </button>
        <button type="button" className="btn">
          alliance
        </button>
        <button type="button" className="btn">
          applicants
        </button>
        <button type="button" className="btn">
          settings
        </button>
      </div>
    </div>
  );
};

export default Kingdom;
