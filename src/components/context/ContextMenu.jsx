import React, { useRef, useState } from "react";
import { AiFillCopy } from "react-icons/ai";
import { BiCut, BiPaste, BiRefresh } from "react-icons/bi";
import { BsDisplay } from "react-icons/bs";
import { RiShutDownLine } from "react-icons/ri";
import "./context.css";

export default function ContextMenu({ toggleStart, togglePowerOption }) {
  const fileChooserRef = useRef();
  const [selectedFile, setSelectedFile] = useState();

  React.useEffect(() => {
    window.addEventListener("contextmenu", handleContext);
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("contextmenu", handleContext);
      window.removeEventListener("click", handleClose);
    };
  }, []);

  function handleContext(e) {
    e.preventDefault();
    const menu = document.querySelector(".context-menu");
    menu.style.top = e.offsetY + "px";
    menu.style.left = e.offsetX + "px";
    menu.classList.add("open");
    toggleStart(false);
  }
  function handleClose(e) {
    document.querySelector(".context-menu").classList.remove("open");
  }

  const fileBrowseHandler = (e) => {
    const data = e.target.files[0];
    let binaryData = [];
    binaryData.push(data);
    const objectUrl = window.URL.createObjectURL(
      new Blob(binaryData, { type: "application/zip" })
    );
    document.querySelector("body").style.background = objectUrl;
    console.log(objectUrl);
  };

  return (
    <div className="context-menu">
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        ref={fileChooserRef}
        onChange={fileBrowseHandler}
      />
      <div className="item" onClick={() => window.location.reload()}>
        <BiRefresh />
        <span>Refresh</span>
      </div>
      <div className="item">
        <BiCut />
        <span>Cut</span>
      </div>
      <div className="item">
        <AiFillCopy />
        <span>Copy</span>
      </div>
      <div className="item">
        <BiPaste />
        <span>Paste</span>
      </div>
      <hr />

      <div className="item" onClick={() => fileChooserRef.current.click()}>
        <BsDisplay />
        <span>Personalize</span>
      </div>
      <div className="item" onClick={() => togglePowerOption(true)}>
        <RiShutDownLine />
        <span>Shutdown</span>
      </div>
    </div>
  );
}
