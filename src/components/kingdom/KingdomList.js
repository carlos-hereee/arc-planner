import React, { useContext, useEffect, useState } from "react";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import Empty from "../atoms/Empty";
import Icons from "../atoms/Icons";

const KingdomList = ({ newKD, setNewKD }) => {
  const {
    kingdomList,
    getAllKingdom,
    applyKingdom,
    applications,
    cancelAppKingdom,
    updateKingdomList,
  } = useContext(KingdomContext);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search.length) {
      updateKingdomList(search);
    } else getAllKingdom();
  }, [search]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="search-bar">
        <h2>Join a kingdom</h2>

        <div className="input-icon">
          <input
            className="search-bar-input"
            type="text"
            value={search}
            placeholder="...Search here"
            onChange={handleChange}
          />
          <Icons name="search" size="2x" />
        </div>
      </div>
      <div className="list">
        <div className="list-title">
          <span className="row-element">Kingdom #</span>
          <span className="row-element">King </span>
          <span className="row-element">Announcement </span>
        </div>
        {kingdomList && kingdomList.length > 0 ? (
          kingdomList?.map((k) => (
            <div key={k.uid} className="list-row">
              <span className="row-element">{k.name}</span>
              <span className="row-element">{k.kingName}</span>
              <span className="row-element">{k.announcement}</span>
              {applications &&
              applications.length > 0 &&
              applications.some((a) => a.kingdomId === k.uid) ? (
                <button className="btn" onClick={() => cancelAppKingdom(k)}>
                  Cancel
                </button>
              ) : (
                <button className="btn" onClick={() => applyKingdom(k)}>
                  Apply
                </button>
              )}
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
