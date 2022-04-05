import React, { useState, useEffect, lazy, Suspense } from "react";
const Login = lazy(() => import("./components/login/Login"));
import ContextMenu from "./components/context/ContextMenu";
import Taskbar from "./components/taskbar/Taskbar";
import Start from "./components/start/Start";
import Shortcuts from "./components/desktop-shortcuts/Shortcuts";
import ClockWidget from "./components/clock_widget/ClockWidget";
import { useSelector } from "react-redux";

const Spotify = lazy(() => import("./components/spotify/Spotify"));
const Twitter = lazy(() => import("./components/twitter/Twitter"));
const Folder = lazy(() => import("./components/folder/Folder"));
const Browser = lazy(() => import("./components/browser/Browser"));
const Calculator = lazy(() => import("./components/calculator/Calculator"));
const Console = lazy(() => import("./components/console/Console"));
const CodeEditor = lazy(() => import("./components/code_editor/CodeEditor"));
const Todo = lazy(() => import("./components/todo/Todo"));
const Drumpads = lazy(() => import("./components/drumpads/Drumpads"));
const Editor = lazy(() => import("./components/editor/Editor"));
const Weather = lazy(() => import("./components/weather/Weather"));
const PowerOptions = lazy(() => import("./components/power_opts/PowerOptions"));

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
          {tasks.includes("console") && (
            <Suspense fallback={<></>}>
              <Console />
            </Suspense>
          )}
          {tasks.includes("codeeditor") && (
            <Suspense fallback={<></>}>
              <CodeEditor />
            </Suspense>
          )}
          {tasks.includes("todo") && (
            <Suspense fallback={<></>}>
              <Todo />
            </Suspense>
          )}
          {tasks.includes("drumpads") && (
            <Suspense fallback={<></>}>
              <Drumpads />
            </Suspense>
          )}
          {tasks.includes("editor") && (
            <Suspense fallback={<></>}>
              <Editor />
            </Suspense>
          )}
          {tasks.includes("browser") && (
            <Suspense fallback={<></>}>
              {" "}
              <Browser />
            </Suspense>
          )}
          {tasks.includes("weather") && (
            <Suspense fallback={<></>}>
              <Weather weather={weather} />
            </Suspense>
          )}
          {tasks.includes("calculator") && (
            <Suspense fallback={<></>}>
              <Calculator />
            </Suspense>
          )}
          {tasks.includes("files") && (
            <Suspense fallback={<></>}>
              <Folder />
            </Suspense>
          )}
          {tasks.includes("twitter") && (
            <Suspense fallback={<></>}>
              <Twitter />
            </Suspense>
          )}
          {tasks.includes("spotify") && (
            <Suspense fallback={<></>}>
              <Spotify />
            </Suspense>
          )}
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
