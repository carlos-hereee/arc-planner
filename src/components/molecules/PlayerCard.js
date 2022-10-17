import React from "react";

const PlayerCard = ({ user }) => {
  return (
    <div className="card">
      <h4>
        <span>{user.nickname}</span>
      </h4>
      {user.kingdomNumber && (
        <p>
          Kingdom # <span>{user.kingdomNumber}</span>
        </p>
      )}
      <p>
        Power <span>{user.power}</span>
      </p>
    </div>
  );
};

export default PlayerCard;
