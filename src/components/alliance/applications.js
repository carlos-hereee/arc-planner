import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../../utils/context/Player/PlayerState";

export default function Applications() {
  const { getApps, listApps, acceptApp } = useContext(PlayerContext);
  useEffect(() => {
    getApps();
  }, [listApps.length]);
  return (
    <div className="a_wrapper">
      <div>
        <h2>Applications</h2>
      </div>
      <div>
        {listApps.length === 0 ? (
          <div className="empty">No Applications</div>
        ) : (
          ""
        )}
        {listApps &&
          listApps.map((data, idx) => (
            <div className="applicant" key={data.uuid}>
              <div className="img">
                {idx + 1}.
                <img
                  src={`${process.env.REACT_APP_DB_BASE_URL}/${
                    data.path && data.path.replace("\\", "/")
                  }`}
                  alt="profile-picture"
                />
                {data.inGameName}
              </div>
              <div className="btn">
                <Button
                  color="red"
                  size="tiny"
                  onClick={() => acceptApp(data.allianceId, data.profileId)}>
                  Decline
                </Button>
              </div>
              <div className="btn">
                <Button
                  color="green"
                  size="tiny"
                  onClick={() => acceptApp(data.allianceId, data.profileId)}>
                  Accept
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
