import React from "react";

const Currentsong = ({ song }) => {
  return (
    <div className="current-song-preview">
      <img src={song.img} alt="" />
    </div>
  );
};

export default Currentsong;
