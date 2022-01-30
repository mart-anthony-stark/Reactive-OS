import React from "react";
import { IconContext } from "react-icons";
import {
  FcCommandLine,
  FcTodoList,
  FcSearch,
  FcCalculator,
} from "react-icons/fc";
import { FaFileWord, FaTwitter } from "react-icons/fa";
import "./shortcuts.css";

const Shortcuts = ({ tasks, toggleStart, setTasks }) => {
  return (
    <div className="desktop-shortcuts">
      <IconContext.Provider value={{ className: "click-btn app-icon" }}>
        <div
          onDoubleClick={() => {
            setTasks([...tasks, "calculator"]);
            toggleStart(false);
          }}
        >
          <FcCalculator />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "click-btn app-icon" }}>
        <div
          onDoubleClick={() => {
            setTasks([...tasks, "browser"]);
            toggleStart(false);
          }}
        >
          <FcSearch />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "click-btn app-icon" }}>
        <div
          onDoubleClick={() => {
            setTasks([...tasks, "todo"]);
            toggleStart(false);
          }}
        >
          <FcTodoList />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "click-btn app-icon" }}>
        <div
          onDoubleClick={() => {
            setTasks([...tasks, "console"]);
            toggleStart(false);
          }}
        >
          <FcCommandLine />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          className: "click-btn app-icon",
          style: { color: "rgb(255, 255, 255)" },
        }}
      >
        <div
          onDoubleClick={() => {
            setTasks([...tasks, "editor"]);
            toggleStart(false);
          }}
        >
          <FaFileWord />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          className: "click-btn app-icon",
          style: { color: "rgb(29, 155, 240)" },
        }}
      >
        <div
          onDoubleClick={() => {
            setTasks([...tasks, "twitter"]);
            toggleStart(false);
          }}
        >
          <FaTwitter />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Shortcuts;
