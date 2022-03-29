import React from "react";
import { AiFillCopy } from "react-icons/ai";
import { BiCut, BiPaste, BiRefresh } from "react-icons/bi";
import { BsDisplay } from "react-icons/bs";
import { RiShutDownLine } from "react-icons/ri";
import "./context.css";

export default function ContextMenu({ toggleStart, togglePowerOption }) {
  // React.useEffect(()=>{
  //   window.addEventListener('contextmenu', handleContext)
  //   window.addEventListener('click', handleClose)
  //   return ()=> {
  //     window.removeEventListener('contextmenu', handleContext)
  //     window.removeEventListener('click', handleClose)
  //   }
  // },[])

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

  return (
    <div className="context-menu">
      <div className="item">
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
      <div className="item">
        <AiFillCopy />
        <span>Copy</span>
      </div>
      <hr />

      <div className="item">
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
