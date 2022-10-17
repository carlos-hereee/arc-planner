import { useState } from "react";
import KingdomCreate from "./KingdomCreate";
import KingdomList from "./KingdomSearch";

const KingdomContainer = () => {
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
