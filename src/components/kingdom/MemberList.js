import React from "react";
import Empty from "../atoms/Empty";
import PlayerCard from "../molecules/PlayerCard";

const MemberList = ({ list }) => {
  return (
    <div className="card">
      <h2>Members</h2>
      <div className="list-title">
        <p className="row-element">Name</p>
        <p className="row-element">Power </p>
      </div>
      <div className="list">
        {list && list.length > 0 ? (
          list.map((l) => (
            <div key={l.uid} className="list-row">
              <PlayerCard user={l} />
            </div>
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default MemberList;
