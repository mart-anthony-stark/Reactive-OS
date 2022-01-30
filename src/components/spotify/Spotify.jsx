import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./spotify.css";

const Spotify = ({ setTasks, tasks }) => {
  return (
    <div className="spotify" style={{ zIndex: tasks.indexOf("spotify") + 1 }}>
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
