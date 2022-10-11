import React, { useState, useEffect, useContext } from "react";

import AllianceContent from "./allianceContent";
import AllianceSettings from "./settings";

import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import Events from "../event/events";
import Members from "../event/members";
import Applications from "./applications";

export default function AllianceNavLink() {
  const { getPermissions, permissions } = useContext(KingdomContext);
  const [activeItem, setActiveItem] = useState("members");
  const [open, setOpen] = useState(false);

  const item = { margin: "auto", textAlign: "center" };

  function handleItemClick(e, { name }) {
    setOpen(false);
    setActiveItem(name);
  }
  useEffect(() => {
    getPermissions();
  }, []);

  const navLink = {
    alliance: <AllianceContent />,
    events: <Events />,
    members: <Members />,
    settings: <AllianceSettings />,
    applications: <Applications />,
  };
  return (
    <div>
      <div className="header">
        <h1>Alliance</h1>
      </div>
      <div className="body">
        <div className="content">
          <div className="menu">
            <Modal
              basic
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              size="small"
              trigger={<Icon name="bars" size="large" />}>
              <Modal.Actions>
                <Menu text vertical inverted fluid secondary>
                  <Menu.Item
                    name="alliance"
                    active={activeItem === "alliance"}
                    onClick={handleItemClick}
                    style={item}
                  />
                  {permissions.isLead ? (
                    <Menu.Item
                      name="events"
                      active={activeItem === "events"}
                      onClick={handleItemClick}
                      style={item}
                    />
                  ) : (
                    ""
                  )}
                  {permissions.isOwner ? (
                    <Menu.Item
                      name="settings"
                      active={activeItem === "settings"}
                      onClick={handleItemClick}
                      style={item}
                    />
                  ) : (
                    ""
                  )}
                  <Menu.Item
                    name="members"
                    active={activeItem === "members"}
                    onClick={handleItemClick}
                    style={item}
                  />
                  <Menu.Item
                    name="applications"
                    active={activeItem === "applications"}
                    onClick={handleItemClick}
                    style={item}
                  />
                </Menu>
              </Modal.Actions>
            </Modal>
          </div>
          <div style={{ width: "100%" }}>{navLink[activeItem]}</div>
        </div>
      </div>
    </div>
  );
}
