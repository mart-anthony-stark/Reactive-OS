import React from "react";
import PowerButton from "../power_btn/PowerButton";
import "./taskbar.css";
import Clock from "../clock/Clock";
import { CgMenuRound } from "react-icons/cg";
import { GiBattery100, GiDrum } from "react-icons/gi";
import { FcCommandLine, FcTodoList, FcCalculator } from "react-icons/fc";
import { TiCodeOutline } from "react-icons/ti";
import { FaFileWord, FaSpotify, FaTwitter } from "react-icons/fa";
import { AiFillFolderOpen, AiFillChrome } from "react-icons/ai";

import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask, removeTask } from "../../redux/taskSlice";

export default function Taskbar({
  start,
  toggleStart,
  weather,
  togglePowerOption,
}) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div className={start ? "taskbar open" : "taskbar"}>
      <div className="active-tasks">
        {tasks.includes("console") && (
          <div className="task-grp">
            <span>Command Line</span>
            <IconContext.Provider
              value={{ className: "click-btn task", dataApp: "Command Line" }}
            >
              <div>
                <FcCommandLine />
              </div>
            </IconContext.Provider>
          </div>
        )}

        {tasks.includes("codeeditor") && (
          <div className="task-grp">
            <span>Codear</span>
            <IconContext.Provider value={{ className: "click-btn task" }}>
              <div data-app="Codear">
                <TiCodeOutline />
              </div>
            </IconContext.Provider>
          </div>
        )}

        {tasks.includes("todo") && (
          <div className="task-grp">
            <span>Todo App</span>
            <IconContext.Provider value={{ className: "click-btn task" }}>
              <div data-app="Todo App">
                <FcTodoList />
              </div>
            </IconContext.Provider>
          </div>
        )}

        {tasks.includes("drumpads") && (
          <div className="task-grp">
            <span>Drumpads</span>
            <IconContext.Provider value={{ className: "click-btn task" }}>
              <div data-app="Drumpads">
                <GiDrum />
              </div>
            </IconContext.Provider>
          </div>
        )}

        {tasks.includes("editor") && (
          <div className="task-grp">
            <span>Word Editor</span>
            <IconContext.Provider value={{ className: "click-btn task" }}>
              <div data-app="Word Editor">
                <FaFileWord />
              </div>
            </IconContext.Provider>
          </div>
        )}
        {tasks.includes("browser") && (
          <div className="task-grp">
            <span>Web Browser</span>
            <IconContext.Provider value={{ className: "click-btn task" }}>
              <div data-app="Web Browser">
                <AiFillChrome />
              </div>
            </IconContext.Provider>
          </div>
        )}
        {tasks.includes("calculator") && (
          <div className="task-grp">
            <span>Calculator</span>
            <IconContext.Provider value={{ className: "click-btn task" }}>
              <div data-app="Calculator">
                <FcCalculator />
              </div>
            </IconContext.Provider>
          </div>
        )}
        {tasks.includes("files") && (
          <div className="task-grp">
            <span>File Explorer</span>
            <IconContext.Provider value={{ className: "click-btn task" }}>
              <div data-app="Calculator">
                <AiFillFolderOpen />
              </div>
            </IconContext.Provider>
          </div>
        )}
        {tasks.includes("twitter") && (
          <div className="task-grp">
            <span>Twitter</span>
            <IconContext.Provider
              value={{
                className: "click-btn task",
                style: { color: "#1D9BF0" },
              }}
            >
              <div data-app="Calculator">
                <FaTwitter />
              </div>
            </IconContext.Provider>
          </div>
        )}
        {tasks.includes("spotify") && (
          <div className="task-grp">
            <span>Spotify</span>
            <IconContext.Provider
              value={{
                className: "click-btn task",
                style: { color: "#216338" },
              }}
            >
              <div>
                <FaSpotify />
              </div>
            </IconContext.Provider>
          </div>
        )}
      </div>

      <div
        className="start-btn"
        onClick={() => {
          toggleStart((prev) => !prev);
        }}
      >
        <IconContext.Provider value={{ className: "click-btn" }}>
          <div>
            <CgMenuRound />
          </div>
        </IconContext.Provider>
      </div>

      <div className="right">
        <div
          className="weather"
          onClick={() => {
            if (tasks.includes("weather")) dispatch(removeTask("weather"));
            else dispatch(addTask("weather"));
          }}
        >
          <h3>{weather.main.temp} °C</h3>
          <img src={iconUrl} className="weather-icon" />
        </div>
        <PowerButton togglePowerOption={togglePowerOption} />
        <Clock />
        <IconContext.Provider
          value={{ className: "click-btn battery", style: { color: "black" } }}
        >
          <GiBattery100 />
        </IconContext.Provider>
      </div>
    </div>
  );
}
