import React, { useEffect, useState, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Key from "./Key";
import "./drumpads.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/taskSlice";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

export default function Drumpads() {
  const dispatch = useDispatch();
  const [currentKeys, setKeys] = useState(bankOne);
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    const app = document.querySelector(".drumpads");
    const header = document.querySelector(".drumpads-header");
    function onDrag({ movementX, movementY }) {
      let styles = window.getComputedStyle(app);
      let left = parseInt(styles.left);
      let top = parseInt(styles.top);
      app.style.left = `${left + movementX}px`;
      app.style.top = `${top + movementY}px`;
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
  }, [currentKeys, tasks]);

  return (
    <div className="drumpads" style={{ zIndex: tasks.indexOf("drumpads") + 1 }}>
      <div className="drumpads-header">
        Drumpads
        <div
          className="close-btn"
          onClick={() => dispatch(removeTask("drumpads"))}
        >
          <AiFillCloseCircle />
        </div>
      </div>

      <div className="hero">
        <div className="keys">
          {currentKeys.map((pad) => (
            <Key key={pad.url} pad={pad} />
          ))}
        </div>
        <div className="controls"></div>
      </div>
    </div>
  );
}
