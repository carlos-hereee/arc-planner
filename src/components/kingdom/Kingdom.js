import React, { useContext, useEffect, useState } from "react";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import { UserContext } from "../../utils/context/User/UserContext";
import AllianceList from "./AllianceList";
import ApplicantionList from "./ApplicantionList";
import MemberList from "./MemberList";

const Kingdom = () => {
  const {
    kingdom,
    members,
    allianceList,
    applicantList,
    createAlliance,
    kingdomAllianceApps,
    kingdomAllianceApply,
    getAlliance,
    getMembers,
    getAllianceApps,
    getKingdomApplicants,
  } = useContext(KingdomContext);
  const { user } = useContext(UserContext);
  const [listName, setListName] = useState("alliance");

  useEffect(() => {
    if (listName && listName === "alliance") {
      getAlliance();
      getAllianceApps();
    }
    if (listName && listName === "members") {
      getMembers();
    }
    if (listName && listName === "applicants") {
      getKingdomApplicants();
    }
  }, [listName]);

  const selectedList = {
    alliance: (
      <AllianceList
        list={allianceList}
        create={createAlliance}
        applications={kingdomAllianceApps}
        applyAlliance={kingdomAllianceApply}
      />
    ),
    members: <MemberList list={members} />,
    applicants: <ApplicantionList list={applicantList} />,
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Kingdom {kingdom.number}</h1>
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
