import React from "react";
import { IconContext } from "react-icons";
import "./style.css";
import { BiPowerOff } from "react-icons/bi";

export default function PowerButton({ togglePowerOption }) {
  return (
    <div
      className="power-btn"
      onClick={() => {
        togglePowerOption(true);
      }}
    >
      <IconContext.Provider value={{ className: "power click-btn" }}>
        <BiPowerOff />
      </IconContext.Provider>
    </div>
  );
}
