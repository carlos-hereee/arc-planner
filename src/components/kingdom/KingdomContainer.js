import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/context/User/UserContext";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import KingdomCreate from "./KingdomCreate";
import KingdomList from "./KingdomList";

const KingdomContainer = () => {
  const { user, getUserData } = useContext(UserContext);
  const [newKD, setNewKD] = useState(false);

  return (
    <div className="card">
      {newKD ? (
        <KingdomCreate show={newKD} setNewKD={setNewKD} />
      ) : (
        <KingdomList newKD={newKD} setNewKD={setNewKD} />
      )}
    </div>
  );
};

export default KingdomContainer;
