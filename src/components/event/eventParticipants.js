import React from "react";

export default function EventParticipants({ participants }) {
  const t3 = participants.t3arch + participants.t3inf + participants.t3cav;
  const t4 = participants.t4arch + participants.t4inf + participants.t4cav;
  const t5 = participants.t5arch + participants.t5inf + participants.t5cav;
  return (
    <div>
      <div className="row">
        <p>Participants are as following:</p>
      </div>
      {participants &&
        participants.map((data) => (
          <div className="cards" key={data.uuid}>
            <div className="card">
              <div>
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/${
                    data.path && data.path.replace("\\", "/")
                  }`}
                />
              </div>
              <div className="card_content">
                <div className="gov_name">{data.inGameName}</div>
                <div className="bar">
                  <div
                    className="t"
                    style={
                      (t3 * 100) / (t3 + t4 + t5)
                        ? {
                            width: `${(t3 * 100) / (t3 + t4 + t5)}%`,
                            background: "rgb(55 181 254)",
                          }
                        : {
                            display: "none",
                          }
                    }>
                    {t3} t3
                  </div>
                  <div
                    className="t"
                    style={
                      (t4 * 100) / (t3 + t4 + t5)
                        ? {
                            width: `${(t4 * 100) / (t3 + t4 + t5)}%`,
                            background: "rgb(127 47 168)",
                          }
                        : {
                            display: "none",
                          }
                    }>
                    {t4} t4
                  </div>
                  <div
                    className="t"
                    style={
                      (t5 * 100) / (t3 + t4 + t5)
                        ? {
                            width: `${(t5 * 100) / (t3 + t4 + t5)}%`,
                            background: "#FFA500",
                          }
                        : {
                            display: "none",
                          }
                    }>
                    {t5} t5
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
