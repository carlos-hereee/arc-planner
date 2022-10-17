import React, { useState } from "react";
import AllianceCreate from "./AllianceCreate";
import Empty from "../atoms/Empty";

const AllianceList = ({ list, create }) => {
  const [show, setShow] = useState(true);
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

  return (
    <div className="card">
      {show ? <h2>Alliance</h2> : <h2>Create Alliance</h2>}
      {list && list.length > 0 ? (
        list.map((l) => (
          <span className="row-element" key={l.uid}>
            {l.name}
          </span>
        ))
      ) : show ? (
        <AllianceCreate setShow={setShow} create={create} />
      ) : (
        <Empty />
      )}
      {!show && (
        <button className="btn" onClick={() => setShow(!show)}>
          Create Alliance
        </button>
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
