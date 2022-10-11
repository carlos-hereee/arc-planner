import React, { useContext, useEffect } from "react";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import Empty from "../atoms/Empty";

const KingdomList = ({ newKD, setNewKD }) => {
  const { kingdomList, getAllKingdom } = useContext(KingdomContext);
  useEffect(() => {
    getAllKingdom();
  }, []);
  return (
    <>
      <h2>Join a kingdom</h2>
      <div className="list">
        <div className="list-title">
          <span className="row-element">Kingdom #</span>
          <span className="row-element">King </span>
          <span className="row-element">Announcement </span>
        </div>
        {kingdomList.length > 0 ? (
          kingdomList.map((k) => (
            <div key={k.uid} className="list-row">
              <span className="row-element">{k.name}</span>
              <span className="row-element">{k.kingName}</span>
              <span className="row-element">{k.announcement}</span>
              <button className="btn">Apply</button>
            </div>
          ))
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
