import React from "react";
import { CgMusicSpeaker } from "react-icons/cg";
import { GiMicrophone, GiSpeaker } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { RiPlayList2Line } from "react-icons/ri";

const Rightcontrols = () => {
  return (
    <div className="rightControls">
      <IconContext.Provider value={{ className: "right-control-icon" }}>
        <GiMicrophone />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "right-control-icon" }}>
        <RiPlayList2Line />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "right-control-icon" }}>
        <CgMusicSpeaker />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "right-control-icon" }}>
        <GiSpeaker />
      </IconContext.Provider>
      <div className="volume"></div>
    </div>
  );
};

export default Rightcontrols;
