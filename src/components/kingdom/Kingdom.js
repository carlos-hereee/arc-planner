import React, { useContext } from "react";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";

const Kingdom = () => {
  const { kingdom } = useContext(KingdomContext);
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="card-title">Kingdom {kingdom.name}</h1>
        <h3 className="subtitle">King : {kingdom.kingName}</h3>
        <p className="description">{kingdom.announcement}</p>
      </div>
      <div></div>
    </div>
  );
};

export default Kingdom;
