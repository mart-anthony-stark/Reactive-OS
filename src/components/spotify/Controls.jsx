import React from "react";
import { IoShuffleOutline } from "react-icons/io5";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";

const Controls = () => {
  return (
    <div className="controls">
      <div className="top">
        <IoShuffleOutline />
        <CgPlayTrackPrev />
        <FaPlay />
        <CgPlayTrackNext />
        <FiRepeat />
      </div>
      <div className="bot"></div>
    </div>
  );
};

export default Controls;
