import React, { useEffect } from "react";
import { AiFillCloseCircle, AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";
import "./spotify.css";

const Spotify = ({ setTasks, tasks }) => {
  useEffect(function () {
    const spotify = document.querySelector(".spotify");

    function onDrag({ movementX, movementY }) {
      let styles = window.getComputedStyle(spotify);
      let left = parseInt(styles.left);
      let top = parseInt(styles.top);

      spotify.style.top = `${top + movementY}px`;
      spotify.style.left = `${left + movementX}px`;
    }
    spotify.addEventListener("mousedown", () => {
      spotify.addEventListener("mousemove", onDrag);
    });
    window.addEventListener("mouseup", () => {
      spotify.removeEventListener("mousemove", onDrag);
    });

    return function () {
      window.removeEventListener("mouseup", () => {
        spotify.removeEventListener("mousemove", onDrag);
      });
    };
  }, []);
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
      <div className="spotify-main">
        <div className="sidebar">
          <div className="title">
            <IconContext.Provider
              value={{
                className: "spotify-icon",
              }}
            >
              <FaSpotify />
            </IconContext.Provider>
            <h1>Spotify</h1>
          </div>

          <div className="link-menu">
            <div className="link active">
              <IconContext.Provider
                value={{
                  className: "link-icon",
                }}
              >
                <AiFillHome />
              </IconContext.Provider>
              <span>Home</span>
            </div>
            <div className="link">
              <IconContext.Provider
                value={{
                  className: "link-icon",
                }}
              >
                <AiOutlineSearch />
              </IconContext.Provider>
              <span>Search</span>
            </div>
            <div className="link">
              <IconContext.Provider
                value={{
                  className: "link-icon",
                }}
              >
                <VscLibrary />
              </IconContext.Provider>
              <span>Your Library</span>
            </div>
          </div>
        </div>

        {/* Main scrollable field (item tracks) */}
        <div className="feed">
          <div className="topnav"></div>
        </div>
        {/* Bottom music controls */}
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Spotify;
