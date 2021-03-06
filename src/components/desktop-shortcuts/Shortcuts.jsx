import React from "react";
import { IconContext } from "react-icons";
import {
  FcCommandLine,
  FcTodoList,
  FcSearch,
  FcCalculator,
} from "react-icons/fc";
import { AiFillChrome } from "react-icons/ai";
import { FaFileWord, FaTwitter } from "react-icons/fa";
import "./shortcuts.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/taskSlice";

const Shortcuts = ({ toggleStart }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  return (
    <div className="desktop-shortcuts">
      <IconContext.Provider value={{ className: "click-btn app-icon" }}>
        <div
          onDoubleClick={() => {
            dispatch(addTask("calculator"));
            toggleStart(false);
          }}
        >
          <FcCalculator />
        </div>
      </IconContext.Provider>
      <div
        className="click-btn app-icon portfolio-icon"
        onDoubleClick={() => {
          dispatch(addTask("portfolio"));
          toggleStart(false);
        }}
      >
        <div className="icon">M</div>
      </div>
      <IconContext.Provider
        value={{
          className: "click-btn app-icon",
          style: { color: "rgb(13, 118, 167)" },
        }}
      >
        <div
          onDoubleClick={() => {
            dispatch(addTask("browser"));
            toggleStart(false);
          }}
        >
          <AiFillChrome />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "click-btn app-icon" }}>
        <div
          onDoubleClick={() => {
            dispatch(addTask("todo"));
            toggleStart(false);
          }}
        >
          <FcTodoList />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "click-btn app-icon" }}>
        <div
          onDoubleClick={() => {
            dispatch(addTask("console"));
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
            dispatch(addTask("editor"));
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
            dispatch(addTask("twitter"));
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
