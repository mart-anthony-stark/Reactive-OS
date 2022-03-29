import React from "react";
import { CgMic } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import SearchIcon from "./img/Searchbar.svg";
import BoggleMic from "./img/Boogle Icon.png";
import InputBox from "./InputBox";
export default function SearchBox({
  setCurrentSearch,
  currentSearch,
  handleEnter,
  setSearch,
}) {
  function toggleChange(value) {
    setCurrentSearch(value);
    setSearch(value);
  }

  return (
    <InputBox
      class={"searchbox-top"}
      placeholder={"Boggle Search"}
      currentSearch={currentSearch}
      toggleChange={(e) => toggleChange(e.target.value)}
      search={SearchIcon}
      handleEnter={handleEnter}
      mic={BoggleMic}
      micclass={"boggle-mic"}
    />
  );
}
