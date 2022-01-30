import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./spotify.css";

const Spotify = ({ setTasks }) => {
  return (
    <div className="spotify">
      <div className="spotify-header app-header">
        <span>Spotify</span>
        <div
          className="close-btn"
          onClick={() => {
            setTasks((prev) => prev.filter((p) => p !== "spotify"));
          }}
        >
          <AiFillCloseCircle />
        </div>
      </div>
    </div>
  );
};

export default Spotify;
