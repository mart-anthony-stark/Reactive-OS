import React, { useEffect, useState, useRef } from "react";
import DailyMix from "./DailyMix";
import Controls from "./Controls";
import CurrentSong from "./CurrentSong";
import {
  AiFillCloseCircle,
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiTwotoneHeart,
  AiFillLeftCircle,
  AiFillRightCircle,
  AiFillCaretDown,
} from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";
import "./spotify.css";
import { handleDrag } from "../../../helpers";
import dp from "../browser/dp.jpg";
import Rightcontrols from "./RightControls";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/taskSlice";

const Spotify = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [scrolledDown, setScrolldown] = useState(false);
  const [playingMix, setPlayingMix] = useState("Daily Mix 1");
  const [currentSong, setCurrentSong] = useState({
    title: "Love me or Leave me",
    img: "https://i.scdn.co/image/ab67616d000048510582daa99a6621b6ffd83525",
    artist: "Day 6",
  });

  const handleScroll = (e) => {
    if (e.target.scrollTop > 0) setScrolldown(true);
    else setScrolldown(false);
  };

  useEffect(function () {
    const spotify = document.querySelector(".spotify");
    const header = document.querySelector(".spotify-header");

    function onDrag({ movementX, movementY }) {
      handleDrag(movementX, movementY, spotify);
    }
    header.addEventListener("mousedown", () => {
      header.addEventListener("mousemove", onDrag);
    });
    window.addEventListener("mouseup", () => {
      header.removeEventListener("mousemove", onDrag);
    });

    return function () {
      window.removeEventListener("mouseup", () => {
        header.removeEventListener("mousemove", onDrag);
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
            dispatch(removeTask("spotify"));
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

          <div className="ops">
            <div className="ops-item">
              <IconContext.Provider
                value={{ className: "add-icon", style: { fontSize: "5px" } }}
              >
                <AiOutlinePlus />
              </IconContext.Provider>
              <span>Create Playlist</span>
            </div>
            <div className="ops-item">
              <IconContext.Provider
                value={{
                  className: "add-icon",
                  style: {
                    color: "rgba(255,255,255,.7)",
                    background:
                      "linear-gradient(to bottom right, rgb(58, 37, 131), #a572a5)",
                  },
                }}
              >
                <AiTwotoneHeart />
              </IconContext.Provider>
              <span>Liked Songs</span>
            </div>
          </div>
        </div>

        {/* Main scrollable field (item tracks) */}
        <div className="feed" onScroll={handleScroll}>
          <div className={`topnav ${scrolledDown && "scrolled"}`}>
            <div className="left">
              <AiFillLeftCircle />
              <AiFillRightCircle />
            </div>
            <div className="right">
              <img src={dp} alt="Spotify account" className="dp" />
              <h5>Mart Anthony ...</h5>
              <AiFillCaretDown />
            </div>
          </div>
          <div className="top-overlay"></div>
          <div className="daily-mix">
            <h1>Good {new Date().getHours < 12 ? "Morning" : "Evening"}</h1>
            <div className="mixes">
              {mixes.map((mix) => (
                <DailyMix mix={mix} playingMix={playingMix} />
              ))}
            </div>
          </div>
        </div>
        {/* Bottom music controls */}
        <div className="bottom">
          <CurrentSong song={currentSong} />
          <Controls />
          <Rightcontrols />
        </div>
      </div>
    </div>
  );
};

const mixes = [
  {
    title: "Daily Mix 1",
    img: "https://github.com/mart-anthony-stark/Reactive-OS/blob/master/src/img/DailyMix/1.jpg?raw=true",
  },
  {
    title: "Daily Mix 2",
    img: "https://github.com/mart-anthony-stark/Reactive-OS/blob/master/src/img/DailyMix/2.jpg?raw=true",
  },
  {
    title: "Daily Mix 3",
    img: "https://github.com/mart-anthony-stark/Reactive-OS/blob/master/src/img/DailyMix/3.jpg?raw=true",
  },
  {
    title: "K-Pop Mix",
    img: "https://github.com/mart-anthony-stark/Reactive-OS/blob/master/src/img/DailyMix/kpop.jpg?raw=true",
  },
  {
    title: "NCT 127",
    img: "https://github.com/mart-anthony-stark/Reactive-OS/blob/master/src/img/DailyMix/NCT127.jpg?raw=true",
  },
  {
    title: "TWICE",
    img: "https://github.com/mart-anthony-stark/Reactive-OS/blob/master/src/img/DailyMix/twice.jpg?raw=true",
  },
];

export default Spotify;
