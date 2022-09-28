import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="btns">
      <Link to="/user">Governor</Link>
      <Link to="/alliance">Alliance</Link>
    </div>
  );
}
