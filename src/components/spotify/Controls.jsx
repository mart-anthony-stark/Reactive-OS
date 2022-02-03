import React from "react";
import { IoShuffleOutline } from "react-icons/io5";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";
import { IoIosPlay, IoIosRepeat } from "react-icons/io";
import { IconContext } from "react-icons/lib";

const Controls = () => {
  return (
    <div className="controls">
      <div className="top">
        <IconContext.Provider value={{ className: "control-icon" }}>
          <IoShuffleOutline />
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "control-icon" }}>
          <CgPlayTrackPrev />
        </IconContext.Provider>
        <div className="play-icon">
          <IconContext.Provider value={{ className: "control-icon play" }}>
            <IoIosPlay />
          </IconContext.Provider>
        </div>
        <IconContext.Provider value={{ className: "control-icon" }}>
          <CgPlayTrackNext />
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "control-icon" }}>
          <IoIosRepeat />
        </IconContext.Provider>
      </div>
      <div className="bot"></div>
    </div>
  );
};

export default Controls;
