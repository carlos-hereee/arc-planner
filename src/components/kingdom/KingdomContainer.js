import React, { useContext, useState } from "react";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import KingdomCreate from "./KingdomCreate";
import KingdomList from "./KingdomList";

const KingdomContainer = () => {
  const [newKD, setNewKD] = useState(false);
  return (
    <div className="card">
      {newKD ? (
        <KingdomCreate newKD={newKD} setNewKD={setNewKD} />
      ) : (
        <KingdomList newKD={newKD} setNewKD={setNewKD} />
      )}
    </div>
  );
};

export default KingdomContainer;
