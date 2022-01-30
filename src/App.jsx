import React, { useState, useEffect } from "react";
import Login from "./components/login/Login";
import ContextMenu from "./components/context/ContextMenu";
import Taskbar from "./components/taskbar/Taskbar";
import Start from "./components/start/Start";
import Console from "./components/console/Console";
import ClockWidget from "./components/clock_widget/ClockWidget";
import CodeEditor from "./components/code_editor/CodeEditor";
import Todo from "./components/todo/Todo";
import Drumpads from "./components/drumpads/Drumpads";
import Editor from "./components/editor/Editor";
import SearchEngine from "./components/search/SearchEngine";
import PowerOptions from "./components/power_opts/PowerOptions";
import PowerButton from "./components/power_btn/PowerButton";
import Weather from "./components/weather/Weather";
import Browser from "./components/browser/Browser";
import Calculator from "./components/calculator/Calculator";
import Folder from "./components/folder/Folder";
import Twitter from "./components/twitter/Twitter";
import Shortcuts from "./components/desktop-shortcuts/Shortcuts";
import Spotify from "./components/spotify/Spotify";

let dataObj = {
  main: { humidity: "", pressure: "", temp: "" },
  wind: { speed: "" },
  weather: [{ description: "", main: "", icon: "" }],
  sys: { country: "" },
};
function App() {
  const [start, toggleStart] = useState(false);
  const [powerOption, togglePowerOption] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [weather, setWeather] = useState(dataObj);

  useEffect(() => {
    getWeatherData();
  }, []);
  async function getWeatherData() {
    const ip = await fetch("https://ipinfo.io/json?token=9ef2e38a32ae2f");
    const ipData = await ip.json();

    const weather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ipData.city}&units=metric&APPID=c3c4f72debc080219009dd186a5092cc`
    );
    const weatherData = await weather.json();

    setWeather(weatherData);
  }
  return (
    <main>
      <Login weather={weather} />
      <PowerButton togglePowerOption={togglePowerOption} />
      <div className="desktop">
        <ContextMenu
          toggleStart={toggleStart}
          togglePowerOption={togglePowerOption}
        />
        <Start
          start={start}
          toggleStart={toggleStart}
          setTasks={setTasks}
          tasks={tasks}
        />
        {/* Desktop Shortcut apps */}
        <Shortcuts
          tasks={tasks}
          toggleStart={toggleStart}
          setTasks={setTasks}
        />

        {/** APPS */}
        {tasks.includes("console") && (
          <Console setTasks={setTasks} tasks={tasks} />
        )}
        {tasks.includes("codeeditor") && (
          <CodeEditor setTasks={setTasks} tasks={tasks} />
        )}
        {tasks.includes("todo") && <Todo setTasks={setTasks} tasks={tasks} />}
        {tasks.includes("drumpads") && (
          <Drumpads setTasks={setTasks} tasks={tasks} />
        )}
        {tasks.includes("editor") && (
          <Editor setTasks={setTasks} tasks={tasks} />
        )}
        {tasks.includes("browser") && (
          <Browser setTasks={setTasks} tasks={tasks} />
        )}
        {tasks.includes("weather") && <Weather weather={weather} />}
        {tasks.includes("calculator") && (
          <Calculator setTasks={setTasks} tasks={tasks} />
        )}
        {tasks.includes("files") && (
          <Folder setTasks={setTasks} tasks={tasks} />
        )}
        {tasks.includes("twitter") && (
          <Twitter setTasks={setTasks} tasks={tasks} />
        )}
        {tasks.includes("spotify") && (
          <Spotify setTasks={setTasks} tasks={tasks} />
        )}
        <ClockWidget />

        {powerOption && <PowerOptions togglePowerOption={togglePowerOption} />}
      </div>
      <Taskbar
        start={start}
        toggleStart={toggleStart}
        weather={weather}
        tasks={tasks}
        setTasks={setTasks}
      />
    </main>
  );
}

export default App;
