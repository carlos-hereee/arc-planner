import React, { useContext } from "react";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import Empty from "../Empty";

const KingdomList = () => {
  const { kingdomList } = useContext(KingdomContext);
  return (
    <div className="card">
      <h2>Join a kingdom</h2>
      <div className="list">
        {kingdomList.length > 0 ? (
          kingdomList.map((k) => <div key={k.uid}> {k.name} </div>)
        ) : (
          <Empty />
        )}
      </div>
      <span>Don't see your kingdom?</span>
      <button className="btn">Create</button>
    </div>
  );
};

export default KingdomList;
