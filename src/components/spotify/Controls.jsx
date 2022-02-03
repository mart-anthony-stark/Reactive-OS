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
      <div className="bot">
        <span className="time">0:00</span>
        <div className="time-span"></div>
        <span className="time">3:07</span>
      </div>
    </div>
  );
};

export default Controls;
