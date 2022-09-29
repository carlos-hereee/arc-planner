import React, { useState, useContext } from "react";

import { PlayerContext } from "../../utils/context/Player/PlayerState";

export default function TroopBtns({ type, counts }) {
  const [isPositive, setIsPositive] = useState(true);
  const [hasChanged, setHasChanged] = useState(false);
  let [addedTroops, setAddedTroops] = useState(0);
  const [inputTroops, setInputTroops] = useState(0);

  const { profile, updateTroops } = useContext(PlayerContext);
  function togglePositive() {
    setIsPositive(!isPositive);
  }
  function updateCount(count) {
    setHasChanged(true);
    isPositive
      ? setAddedTroops((addedTroops += count))
      : setAddedTroops((addedTroops -= count));
  }
  function inputChange(count) {
    setHasChanged(true);
    setAddedTroops(0);
    setInputTroops(count);
  }
  function saveTroops() {
    inputTroops === 0
      ? updateTroops(type, addedTroops + counts)
      : updateTroops(type, inputTroops);
    setHasChanged(false);
    setAddedTroops(0);
  }
  return (
    <div className="f_wrapper">
      <div className="inputed">
        <div>
          <input
            className="input"
            key={profile[type]}
            type="text"
            defaultValue={counts}
            onChange={(e) => inputChange(e.target.value)}
          />
        </div>
        {hasChanged && addedTroops !== 0 ? (
          <>
            {isPositive ? (
              <div className="positive">+{addedTroops}</div>
            ) : (
              <div className="negative">-{addedTroops}</div>
            )}
          </>
        ) : (
          <div className="box"></div>
        )}
      </div>
      <div className="file">
        <div
          onClick={togglePositive}
          className={isPositive ? "green_btn" : "red_btn"}>
          {isPositive ? "+" : "-"}
        </div>
        <div
          className={isPositive ? "green_btn" : "red_btn"}
          onClick={() => updateCount(100)}>
          100
        </div>
        <div
          className={isPositive ? "green_btn" : "red_btn"}
          onClick={() => updateCount(500)}>
          500
        </div>
        <div
          className={isPositive ? "green_btn" : "red_btn"}
          onClick={() => updateCount(1000)}>
          1000
        </div>
        {hasChanged ? (
          <button className="save_btn" onClick={() => saveTroops()}>
            Save
          </button>
        ) : (
          <div className="box"></div>
        )}
      </div>
    </div>
  );
}
