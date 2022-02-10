import React from "react";
import "./start.css";
import {
  AiFillChrome,
  AiFillCloseCircle,
  AiFillFolderOpen,
} from "react-icons/ai";
import { FaFileWord, FaTwitter, FaSpotify } from "react-icons/fa";
import { FcCommandLine, FcTodoList, FcCalculator } from "react-icons/fc";
import { TiCodeOutline } from "react-icons/ti";
import { GiDrum } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/taskSlice";

export default function Start({ start, toggleStart }) {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  return (
    <div className={`start-menu ${start && "open"}`}>
      <div className="close" onClick={() => toggleStart(false)}>
        <IconContext.Provider value={{ className: "click-btn" }}>
          <AiFillCloseCircle />
        </IconContext.Provider>
      </div>
      <h3 className="title">Applications</h3>
      <div className="apps">
        <div
          className="application"
          onDoubleClick={() => {
            dispatch(addTask("console"));
            toggleStart(false);
          }}
        >
          <IconContext.Provider value={{ className: "click-btn" }}>
            <div>
              <FcCommandLine />
            </div>
          </IconContext.Provider>
          <p className="app-name">Sheen CLI</p>
        </div>

        <div
          className="application"
          onDoubleClick={() => {
            dispatch(addTask("codeeditor"));
            toggleStart(false);
          }}
        >
          <IconContext.Provider value={{ className: "click-btn" }}>
            <div>
              <TiCodeOutline />
            </div>
          </IconContext.Provider>
          <p className="app-name">Codear</p>
        </div>

        <div
          className="application"
          onDoubleClick={() => {
            dispatch(addTask("todo"));
            toggleStart(false);
          }}
        >
          <IconContext.Provider value={{ className: "click-btn" }}>
            <div>
              <FcTodoList />
            </div>
          </IconContext.Provider>
          <p className="app-name">Todos</p>
        </div>

        <div
          className="application"
          onDoubleClick={() => {
            dispatch(addTask("drumpads"));
            toggleStart(false);
          }}
        >
          <IconContext.Provider value={{ className: "click-btn" }}>
            <div>
              <GiDrum />
            </div>
          </IconContext.Provider>
          <p className="app-name">Drumpads</p>
        </div>

        <div
          className="application"
          onDoubleClick={() => {
            dispatch(addTask("editor"));
            toggleStart(false);
          }}
        >
          <IconContext.Provider
            value={{
              className: "click-btn",
              style: { color: "rgb(255, 255, 255)" },
            }}
          >
            <div>
              <FaFileWord />
            </div>
          </IconContext.Provider>
          <p className="app-name">Word Editor</p>
        </div>

        <div
          className="application"
          onDoubleClick={() => {
            dispatch(addTask("browser"));
            toggleStart(false);
          }}
        >
          <IconContext.Provider
            value={{
              className: "click-btn",
              style: { color: "rgb(13, 118, 167)" },
            }}
          >
            <div>
              <AiFillChrome />
            </div>
          </IconContext.Provider>
          <p className="app-name">Web Browser</p>
        </div>

        <div
          className="application"
          onDoubleClick={() => {
            dispatch(addTask("calculator"));
            toggleStart(false);
          }}
        >
          <IconContext.Provider value={{ className: "click-btn" }}>
            <div>
              <FcCalculator />
            </div>
          </IconContext.Provider>
          <p className="app-name">Calculator</p>
        </div>

        <div
          className="application"
          onDoubleClick={() => {
            dispatch(addTask('files'))
            toggleStart(false);
          }}
        >
          <IconContext.Provider
            value={{ className: "click-btn", style: { color: "#232323" } }}
          >
            <div>
              <AiFillFolderOpen />
            </div>
          </IconContext.Provider>
          <p className="app-name">File Explorer</p>
        </div>

        <div
          className="application"
          onDoubleClick={() => {
            setTasks([...tasks, "twitter"]);
            toggleStart(false);
          }}
        >
          <IconContext.Provider
            value={{
              className: "click-btn",
              style: { color: "rgb(29, 155, 240)" },
            }}
          >
            <div>
              <FaTwitter />
            </div>
          </IconContext.Provider>
          <p className="app-name">Twitter</p>
        </div>

        <div
          className="application"
          onDoubleClick={() => {
            setTasks([...tasks, "spotify"]);
            toggleStart(false);
          }}
        >
          <IconContext.Provider
            value={{
              className: "click-btn",
              style: { color: "#1db853" },
            }}
          >
            <div>
              <FaSpotify />
            </div>
          </IconContext.Provider>
          <p className="app-name">Spotify</p>
        </div>
      </div>
    </div>
  );
}
