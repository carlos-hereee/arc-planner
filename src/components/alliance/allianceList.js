import React, { useContext, useEffect } from "react";
import CreateAlliance from "./CreateAlliance";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import Empty from "../atoms/Empty";

const AllianceList = ({ list }) => {
  // const {
  //   allianceList,
  //   allianceListError,
  //   getAllianceList,
  //   applications,
  //   sendApplication,
  //   cancelApplication,
  //   getApplications,
  // } = useContext(KingdomContext);

  // useEffect(() => {
  //   getApplications();
  //   getAllianceList();
  // }, [applications.length]);

  // function applicationSent(e) {
  //   sendApplication(e);
  // }
  // function applicationCancel(e) {
  //   cancelApplication(e);
  // }
  console.log("list", list);
  return (
    <div className="card">
      <h2>Alliance</h2>
      {list && list.length > 0 ? (
        list.map((l) => (
          <span className="row-element" key={l.uid}>
            {l.name}
          </span>
        ))
      ) : (
        <div>
          <Empty />
          <CreateAlliance />
        </div>
      )}
    </div>
  );
};
export default AllianceList;

{
  /* <div className="scrollable">
  {allianceListError && (
    <div className="errorWrapper">{allianceListError}</div>
  )}
</div> */
}
{
  /* {allianceList &&
  allianceList.map((data, idx) => (
    <div key={data.uuid} className="row">
      <p>{idx + 1}.</p>
      <p>{data.kingdomNumber}</p>
      <p>{data.allianceTag}</p>
      <p>{data.allianceName}</p>

  ))} */
}
