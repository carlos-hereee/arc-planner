import { useState } from "react";

import Register from "../components/register";
import LogIn from "../components/login";

export default function Main({ history }) {
  const rfToken = localStorage.getItem("refreshToken");
  const [activeItem, setActiveItem] = useState("login");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  if (rfToken) {
    history.push("/user");
  }

  const auth = { login: <LogIn />, register: <Register /> };

  return (
    <div className="main">
      <div className="header">
        <img
          src="https://lilithimage.lilithcdn.com/roc/en/m/imgs/logo_m1.png?v=201809211119"
          alt="riseofkingodms"
        />
      </div>
      <div className="content">
        <div className="card">
          <div>
            <h2>Ark Planner</h2>
            <p>
              Help coordinate with your alliance to let them know your strengths
            </p>
            <p>
              This application is a tool to make Ark Of Osiris team preparation
              easier for player and ARK leaders.
            </p>
            <p>
              Players can sign-up for ARK with just a few clicks, while leaders
              can choose the players in the same way
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <div pointing secondary>
              <div
                name="login"
                active={activeItem === "login"}
                onClick={handleItemClick}
              />
              <div
                name="register"
                active={activeItem === "register"}
                onClick={handleItemClick}
              />
            </div>
            {auth[activeItem]}
          </div>
        </div>
      </div>
    </div>
  );
}
