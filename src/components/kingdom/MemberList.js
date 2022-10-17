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
      {list && list.length > 0 ? (
        list.map((l) => <PlayerCard key={l.uid} user={l} />)
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default MemberList;
