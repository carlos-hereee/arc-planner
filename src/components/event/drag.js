import React, { useState, useContext } from "react";
import { PlayerContext } from "../../utils/context/Player/PlayerState";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import EventParticipants from "./eventParticipants";

// drag
import Item from "./dragable/Item";
import DropWrapper from "./dragable/dropWrapper";
import Col from "./dragable/col";
import { data, statuses } from "./dragable/data";
import "./dragable/styles.css";

export default function Drag() {
  const { participants, teams } = useContext(PlayerContext);
  const [items, setItems] = useState(participants);

  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((si) => si.status === status);
    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };
  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <EventParticipants participants={participants} />
      {teams.map((s) => (
        <div key={s.teamId} className={"col-wrapper"}>
          <h2 className={"col-header"}>{s.teamName.toUpperCase()}</h2>
          <DropWrapper onDrop={onDrop} teamId={s.teamId}>
            <Col>
              {participants
                .filter((i) => i.teamId === s.teamId)
                .map((i, idx) => (
                  <Item key={i.id} item={i} index={idx} moveItem={moveItem} />
                ))}
            </Col>
          </DropWrapper>
        </div>
      ))}
    </DndProvider>
  );
}
