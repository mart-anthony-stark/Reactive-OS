import React, { useState, useEffect, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import ProfileImg from "./dp.jpg";
import SearchIcon from "./img/Searchbar.svg";
import BoggleMic from "./img/Boogle Icon.png";
import { CgMenuGridO } from "react-icons/cg";
import Results from "./Results";
import Searchbox from "./Searchbox";
import "./browser.css";
import { useSelector } from "react-redux";
import { removeTask } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";
import InputBox from "./InputBox";

const resObj = {
  queries: {
    request: [{ searchTerms: "" }],
  },
  items: [
    {
      title: "",
      htmlTitle: "",
      link: "",
      displayLink: "",
      snippet: "",
      formattedUrl: "",
    },
  ],
};

export default function Browser() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [search, setSearch] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const [isResultReady, setResultOpen] = useState(false);
  const [result, setResult] = useState(resObj);

  useEffect(() => {
    const app = document.querySelector(".browser");
    const header = document.querySelector(".browser-header");

    function onDrag({ movementX, movementY }) {
      let styles = window.getComputedStyle(app);
      let left = parseInt(styles.left);
      let top = parseInt(styles.top);

      app.style.top = `${top + movementY}px`;
      app.style.left = `${left + movementX}px`;
    }

    header.addEventListener("mousedown", () => {
      header.addEventListener("mousemove", onDrag);
    });

    document.addEventListener("mouseup", () => {
      header.removeEventListener("mousemove", onDrag);
    });

    return () => {
      document.removeEventListener("mouseup", () => {
        header.removeEventListener("mousemove", onDrag);
      });
    };
  }, [tasks]);

  async function handleSearch() {
    if (search !== "") {
      let query = `https://www.googleapis.com/customsearch/v1?key=AIzaSyCIg2swnHlTn-VtcdAvEQgKekCVqorQRsM&cx=d0a5377312a2b35aa&q=${search}`;
      const res = await fetch(query);
      const data = await res.json();

      setResult(data);
      setCurrentSearch(data.queries.request[0].searchTerms);
      setResultOpen(true);
      setSearch("");
    } else {
      console.error("Invalid query. Please enter a value");
    }
  }

  function toggleChange(value) {
    setSearch(value);
  }

  function handleEnter(e) {
    if (e.code === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="browser" style={{ zIndex: tasks.indexOf("browser") + 1 }}>
      <div className="browser-header app-header">
        <span>Browser</span>
        <div
          className="close-btn"
          onClick={() => dispatch(removeTask("browser"))}
        >
          <AiFillCloseCircle />
        </div>
      </div>

      <div className="search-engine">
        <div
          className="top-nav"
          style={{
            justifyContent: isResultReady ? "space-between" : "flex-end",
            boxShadow: isResultReady && "0 2px 2px rgb(0 0 0 / 40%)",
          }}
        >
          <div className="search-logo">
            {isResultReady && (
              <h4
                onClick={() => {
                  setCurrentSearch("");
                  setSearch("");
                  setResultOpen(false);
                }}
                className="click-btn"
              >
                <span>B</span>
                <span>o</span>
                <span>o</span>
                <span>g</span>
                <span>l</span>
                <span>e</span>
              </h4>
            )}
            {isResultReady && (
              <Searchbox
                currentSearch={currentSearch}
                setCurrentSearch={setCurrentSearch}
                handleEnter={handleEnter}
                setSearch={setSearch}
              />
            )}
          </div>
          <div className="opts">
            <h4>Gmail</h4>
            <h4>Images</h4>
            <CgMenuGridO />
            <img id="profile-image" src={ProfileImg} />
          </div>
        </div>
        {isResultReady && (
          <Results setResultOpen={setResultOpen} result={result} />
        )}
        <h2>
          <span>B</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span>
        </h2>

        <InputBox
          class={"input-container"}
          placeholder={"Search"}
          currentSearch={search}
          toggleChange={(e) => toggleChange(e.target.value)}
          handleEnter={handleEnter}
          search={SearchIcon}
          mic={BoggleMic}
          micclass={"boggle-mic"}
        />

        <div className="buttons">
          <button className="click-btn" onClick={handleSearch}>
            Boogle Search
          </button>
          <button className="click-btn">I'm Feeling Lucky</button>
        </div>
        <p className="covid">
          Have questions on COVID-19 vaccine side effects?
          <a href="#" target="_blank">
            {" "}
            Find out more
          </a>
        </p>
        <p className="language">
          Google offered in: <span> </span>
          <a href="#">Filipino</a> <a href="#">Cebuano</a>
        </p>
      </div>
    </div>
  );
}
