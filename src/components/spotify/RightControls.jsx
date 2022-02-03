import React from "react";
import { CgMusicSpeaker } from "react-icons/cg";
import { GiMicrophone, GiSpeaker } from "react-icons/gi";
import { RiPlayList2Line } from "react-icons/ri";

const Rightcontrols = () => {
  return (
    <div className="rightControls">
      <GiMicrophone />
      <RiPlayList2Line />
      <CgMusicSpeaker />
      <GiSpeaker />
      <div className="volume"></div>
    </div>
  );
};

export default Rightcontrols;
