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
          <p className="row-element">Kingdom #</p>
          <p className="row-element">King </p>
          <p className="row-element">Announcement </p>
        </div>
        {kingdomList && kingdomList.length > 0 ? (
          kingdomList?.map((k) => (
            <div key={k.uid} className="list-row">
              <p className="row-element">{k.name}</p>
              <p className="row-element">{k.kingName}</p>
              <p className="row-element">{k.announcement}</p>
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
      <p>Don't see your kingdom?</p>
      <button className="btn" onClick={() => setNewKD(!newKD)}>
        Create
      </button>
    </>
  );
};

export default KingdomList;
