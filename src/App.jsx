import React, { useState, useEffect, lazy, Suspense } from "react";
const Login = lazy(() => import("./components/login/Login"));
const ContextMenu = lazy(() => import("./components/context/ContextMenu"));
const Taskbar = lazy(() => import("./components/taskbar/Taskbar"));
const Start = lazy(() => import("./components/start/Start"));
const Console = lazy(() => import("./components/console/Console"));
const ClockWidget = lazy(() => import("./components/clock_widget/ClockWidget"));
const CodeEditor = lazy(() => import("./components/code_editor/CodeEditor"));
const Todo = lazy(() => import("./components/todo/Todo"));
const Drumpads = lazy(() => import("./components/drumpads/Drumpads"));
const Editor = lazy(() => import("./components/editor/Editor"));

import PowerOptions from "./components/power_opts/PowerOptions";
import Weather from "./components/weather/Weather";
import Browser from "./components/browser/Browser";
import Calculator from "./components/calculator/Calculator";
import Folder from "./components/folder/Folder";
import Twitter from "./components/twitter/Twitter";
import Shortcuts from "./components/desktop-shortcuts/Shortcuts";
import Spotify from "./components/spotify/Spotify";
import { useSelector } from "react-redux";

let dataObj = {
  main: { humidity: "", pressure: "", temp: "" },
  wind: { speed: "" },
  weather: [{ description: "", main: "", icon: "" }],
  sys: { country: "" },
};
function App() {
  const [start, toggleStart] = useState(false);
  const [powerOption, togglePowerOption] = useState(false);
  const { tasks } = useSelector((state) => state.tasks);
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
      <Suspense fallback={<></>}>
        <Login weather={weather} />
        <div className="desktop">
          <ContextMenu
            toggleStart={toggleStart}
            togglePowerOption={togglePowerOption}
          />
          <Start start={start} toggleStart={toggleStart} />
          {/* Desktop Shortcut apps */}
          <Shortcuts toggleStart={toggleStart} />

          {/** APPS */}
          {tasks.includes("console") && <Console />}
          {tasks.includes("codeeditor") && <CodeEditor />}
          {tasks.includes("todo") && <Todo />}
          {tasks.includes("drumpads") && <Drumpads />}
          {tasks.includes("editor") && <Editor />}
          {tasks.includes("browser") && <Browser />}
          {tasks.includes("weather") && <Weather weather={weather} />}
          {tasks.includes("calculator") && <Calculator />}
          {tasks.includes("files") && <Folder />}
          {tasks.includes("twitter") && <Twitter />}
          {tasks.includes("spotify") && <Spotify />}
          <ClockWidget />

          {powerOption && (
            <PowerOptions togglePowerOption={togglePowerOption} />
          )}
        </div>
        <Taskbar
          start={start}
          toggleStart={toggleStart}
          weather={weather}
          togglePowerOption={togglePowerOption}
        />
      </Suspense>
    </main>
  );
}

export default App;
