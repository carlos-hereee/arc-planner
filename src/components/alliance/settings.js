import React, { useContext, useEffect, useState } from "react";
// import { Formik, Form, Field } from "formik";

import { PlayerContext } from "../../utils/context/Player/PlayerState";

export default function Settings() {
  const { alliance, getAlliance, allianceSettings, deleteAlliance } =
    useContext(PlayerContext);
  const [data, setData] = useState({
    allianceName: "",
    allianceTag: "",
    messageBoard: "",
  });
  const [hasChanged, setHasChanged] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getAlliance();
  }, []);
  function handleChange(e) {
    setHasChanged(true);
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setHasChanged(true);
    allianceSettings(data);
  }
  return (
    <div className="form">
      <label>Alliance Tag:</label>
      <input
        type="text"
        name="allianceTag"
        onChange={handleChange}
        key={alliance.allianceTag}
        defaultValue={alliance.allianceTag}
      />
      <label>Alliance Name:</label>
      <input
        type="text"
        name="allianceName"
        onChange={handleChange}
        key={alliance.allianceName}
        defaultValue={alliance.allianceName}
      />
      <label>Alliance Message Board:</label>
      <textarea
        type="textarea"
        name="messageBoard"
        onChange={handleChange}
        key={alliance.messageBoard}
        defaultValue={alliance.messageBoard}
      />
      <div className="btns">
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button color="red">Disband</Button>}>
          <Modal.Header>Disband Alliance</Modal.Header>
          <Modal.Content>
            <div className="row">
              Are you sure you want to DISBAND the alliance
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={() => deleteAlliance()}>
              DELETE
            </Button>
            <Button color="blue" onClick={() => setOpen(false)}>
              CANCEL
            </Button>
          </Modal.Actions>
        </Modal>
        {hasChanged ? (
          <Button color="blue" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
