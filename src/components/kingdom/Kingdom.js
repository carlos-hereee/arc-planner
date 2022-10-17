import React, { useContext, useEffect, useState } from "react";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import { UserContext } from "../../utils/context/User/UserContext";
import AllianceList from "./AllianceList";

const Kingdom = () => {
  const {
    kingdom,
    kingdomAppList,
    getKingdomList,
    createAlliance,
    kingdomAllianceApps,
    kingdomAllianceApply,
  } = useContext(KingdomContext);
  const { user } = useContext(UserContext);
  const [listName, setListName] = useState("alliance");

  useEffect(() => {
    if (listName) {
      getKingdomList(listName);
    }
  }, [listName]);

  const selectedList = {
    alliance: (
      <AllianceList
        list={kingdomAppList}
        create={createAlliance}
        applications={kingdomAllianceApps}
        applyAlliance={kingdomAllianceApply}
      />
    ),
    // members: <AllianceList />,
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Kingdom {kingdom.name}</h1>
          <h3 className="subtitle">King : {kingdom.kingName}</h3>
          <p className="description">{kingdom.announcement}</p>
        </div>
        <div className="card-nav">
          {/* <button type="button" className="btn">
          kvk
        </button> */}
          <button
            type="button"
            className="btn"
            onClick={(e) => setListName(e.currentTarget.textContent)}>
            alliance
          </button>
          <button
            type="button"
            className="btn"
            onClick={(e) => setListName(e.currentTarget.textContent)}>
            members
          </button>
          {kingdom.kingId === user.uid && (
            <button
              type="button"
              className="btn"
              onClick={(e) => setListName(e.currentTarget.textContent)}>
              applicants
            </button>
          )}
          <button
            type="button"
            className="btn"
            onClick={(e) => setListName(e.currentTarget.textContent)}>
            settings
          </button>
        </div>
      </div>
      {selectedList[listName]}
    </>
  );
};

export default Kingdom;
