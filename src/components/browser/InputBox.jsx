import React from "react";

function InputBox(props) {
  return (
    <div className={props.class}>
      <img src={props.search} alt="" />
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.currentSearch}
        onChange={props.toggleChange}
        onKeyDown={props.handleEnter}
      />
      <img className={props.micclass} src={props.mic} alt="" />
    </div>
  );
}

export default InputBox;
