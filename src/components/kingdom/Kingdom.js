import React, { useContext } from "react";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";

const Kingdom = () => {
  const { kingdom } = useContext(KingdomContext);
  return (
    <div className="card">
      <h2>Kingdom {kingdom.name}</h2>
      <p>King - {kingdom.name}</p>
      <p>{kingdom.announcement}</p>
    </div>
  );
};

export default Kingdom;
