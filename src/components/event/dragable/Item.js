import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ITEM_TYPE } from "./types";
import Members from "../members";

export default function Item({ item, index, moveItem }) {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) return;

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ITEM_TYPE, ...item, index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  drag(drop(ref));

  const t3 = item.t3arch + item.t3inf + item.t3cav;
  const t4 = item.t4arch + item.t4inf + item.t4cav;
  const t5 = item.t5arch + item.t5inf + item.t5cav;

  return (
    <Fragment>
      <div
        ref={ref}
        style={{ opacity: isDragging ? 0 : 1 }}
        className="cards"
        key={item.uuid}>
        <div className="card">
          <div>
            <img
              src={`${process.env.REACT_APP_BASE_URL}/${
                item.path && item.path.replace("\\", "/")
              }`}
            />
          </div>
          <div className="card_content">
            <div className="gov_name">{item.inGameName}</div>
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
    </Fragment>
  );
}
