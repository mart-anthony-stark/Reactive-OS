import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegWindowMaximize } from "react-icons/fa";

const Currentsong = ({ song }) => {
  return (
    <div className="current-song-preview">
      <img src={song.img} alt={song.title} />
      <div>
        <h5>{song.title}</h5>
        <span>{song.artist}</span>
      </div>
      <div className="icons">
        <AiOutlineHeart />
        <FaRegWindowMaximize />
      </div>
    </div>
  );
};

export default Currentsong;
