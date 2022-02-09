import React, { useState, useEffect, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import EditorJs from "react-editor-js";
import CheckList from "@editorjs/checklist";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Image from "@editorjs/image";
import LinkTool from "@editorjs/link";
import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";
import Code from "@editorjs/code";
import SimpleImage from "@editorjs/simple-image";
import "./editor.css";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../redux/taskSlice";

export default function Editor() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [data, setData] = useState("as");
  useEffect(() => {
    const app = document.querySelector(".word-editor");
    const header = document.querySelector(".word-editor-header");

    function onDrag({ movementX, movementY }) {
      let styles = window.getComputedStyle(app);
      let left = parseInt(styles.left) + movementX;
      let top = parseInt(styles.top) + movementY;

      app.style.top = top + "px";
      app.style.left = left + "px";
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

  return (
    <div
      className="word-editor"
      style={{ zIndex: tasks.indexOf("editor") + 1 }}
    >
      <div className="word-editor-header">
        <span>Word editor</span>
        <div
          className="close-btn"
          onClick={() => dispatch(removeTask("editor"))}
        >
          <AiFillCloseCircle />
        </div>
      </div>
      <div className="tools">
        <span>Home</span>
        <span>File</span>
        <span>Settings</span>
        <span>Help</span>
      </div>
      <EditorJs
        data={data}
        tools={{
          checkList: CheckList,
          embed: Embed,
          table: Table,
          linkTool: LinkTool,
          image: Image,
          warning: Warning,
          quote: Quote,
          simpleImage: SimpleImage,
          delimiter: Delimiter,
          code: Code,
        }}
        holder="custom"
      >
        <div id="custom"></div>
      </EditorJs>
    </div>
  );
}
