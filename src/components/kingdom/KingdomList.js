import React, { useContext, useEffect } from "react";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import Empty from "../atoms/Empty";

const KingdomList = ({ newKD, setNewKD }) => {
  const { kingdomList, getAllKingdom } = useContext(KingdomContext);
  useEffect(() => {
    getAllKingdom();
  }, []);
  console.log("kingdomList", kingdomList);
  return (
    <>
      <h2>Join a kingdom</h2>
      <div className="list">
        {kingdomList.length > 0 ? (
          kingdomList.map((k) => <div key={k.uid}> {k.name} </div>)
        ) : (
          <Empty />
        )}
      </div>
      <span>Don't see your kingdom?</span>
      <button className="btn" onClick={() => setNewKD(!newKD)}>
        Create
      </button>
    </>
  );
};

export default KingdomList;
