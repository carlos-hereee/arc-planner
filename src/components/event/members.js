import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../../utils/context/Player/PlayerState";

export default function Members() {
  const { members, getMembers } = useContext(PlayerContext);

  useEffect(() => {
    getMembers();
  }, [members.length]);
  return (
    <div className="m_wrapper">
      <div>
        <h2>Members</h2>
      </div>
      <div className="m_card_wrapper">
        {members &&
          members.map((data) => (
            <div className="card" key={data.uuid}>
              <div>
                <img
                  src={`${process.env.REACT_APP_DB_BASE_URL}/${
                    data.path && data.path.replace("\\", "/")
                  }`}
                  alt="profile-picture"
                />
              </div>
              <div className="card_content">
                <div className="gov_name">{data.inGameName}</div>
                <div className="t">
                  t3: {data.t3arch + data.t3inf + data.t3cav}
                </div>
                <div className="t">
                  t4: {data.t4arch + data.t4inf + data.t4cav}
                </div>
                <div className="t">
                  t5: {data.t5arch + data.t5inf + data.t5cav}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
