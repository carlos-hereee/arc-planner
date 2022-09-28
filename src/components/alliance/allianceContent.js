import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../../utils/context/Player/PlayerState";

import AllianceHeader from "./allianceHeader";
import { Button } from "semantic-ui-react";

export default function AllianceContent() {
  const {
    getCurrentEvents,
    events,
    willParticipate,
    getParticipatingEvents,
    participatingEvents,
  } = useContext(PlayerContext);

  useEffect(() => {
    getCurrentEvents();
    getParticipatingEvents();
  }, [events.length, participatingEvents.length]);
  return (
    <div className="wrapper">
      <AllianceHeader />
      <div className="card_wrapper">
        {events &&
          events.map((data) => (
            <div key={data.eventId} className="eventCards">
              <div className="row">
                <h3 className="title">{data.eventName}</h3>
                <p>This event ends in {data.endDate}</p>
              </div>
              <p>{data.eventDescription}</p>
              <div className="switch">
                <Button.Group>
                  <Button
                    disabled={
                      !participatingEvents.some(
                        (item) => item.eventId === data.eventId
                      )
                    }
                    color="red"
                    inverted
                    onClick={() => willParticipate(0, data.eventId)}>
                    Not Going
                  </Button>
                  <Button.Or />
                  <Button
                    disabled={participatingEvents.some(
                      (item) => item.eventId === data.eventId
                    )}
                    color="blue"
                    inverted
                    onClick={() => willParticipate(1, data.eventId)}>
                    Going
                  </Button>
                </Button.Group>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
